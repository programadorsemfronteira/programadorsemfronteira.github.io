module TagsPageGeneratorPlugin
    class TagsPageGenerator < Jekyll::Generator
      safe true
  
      def generate(site)
        site.tags.each do |tag, posts|
            if ! site.pages.find { |page| page.name == "tags/#{tag}.html" }
                site.pages << TagPage.new(site, tag, posts)
            end
        end
      end
    end
  
    # Subclass of `Jekyll::Page` with custom method definitions.
    class TagPage < Jekyll::Page
      def initialize(site, tag, posts)
        @site = site             # the current site instance.
        @base = site.source      # path to the source directory.
        @dir  = "tags"         # the directory the page will reside in.
  
        # All pages have the same filename, so define attributes straight away.
        @basename = tag      # filename without the extension.
        @ext      = '.html'      # the extension.
        @name     = "#{tag}.html" # basically @basename + @ext.

        info = site.config['tags_config'].find { |search| search['name'] == tag }
  
        # Initialize data hash with a key pointing to all posts under current category.
        # This allows accessing the list in a template via `page.linked_docs`.
        @data = {
          'posts' => posts,
          'title' => info ? info['title'] : tag,
          'tag' => tag
        }

        @content = info ? info['description'] : ''
  
        # Look up front matter defaults scoped to type `tags`, if given key
        # doesn't exist in the `data` hash.
        data.default_proc = proc do |_, key|
          site.frontmatter_defaults.find(relative_path, :tags, key)
        end
      end
  
      # Placeholders that are used in constructing page URL.
      def url_placeholders
        {
          :path       => @dir,
          :category   => @dir,
          :basename   => basename,
          :output_ext => output_ext,
        }
      end
    end
end