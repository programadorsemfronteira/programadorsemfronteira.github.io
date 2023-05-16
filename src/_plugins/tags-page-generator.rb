require_relative "url-filter"

class TagHandler

  attr_accessor :tags

  def initialize
    @tags = {}
  end

  def check(posts)
    posts.each do |post|
      tag = tag_sanitize(post.data['tag'])
      add(post.data['tag'], post)
      if post['others_tags']
        others_tags = post['others_tags'].split('|')
        others_tags.each do |tag|
          add(tag, post)
        end
      end
    end
  end

  private

  def add(tag, post)
    id = tag_sanitize(tag)
    if !@tags[id]
      @tags[id] = { 'name' => tag, 'posts' => [post] }
    elsif !@tags[id]['posts'].find { |_post| _post.data['title'] == post.data['title'] }
      @tags[id]['posts'].push(post)
    end
  end
end

module Jekyll
  module TagsFilter
    def tags_from_site(site)
      handler = TagHandler.new
      handler.check(site.posts)
      handler.tags.values
    end

    def tagname_sanitize(tag)
      "##{tag.downcase.gsub(/\s/, "")}"
    end
  end
end

module TagsPageGeneratorPlugin
    class TagsPageGenerator < Jekyll::Generator
      safe true

      def create_page(site, tag, posts)
        if ! site.pages.find { |page| page.name == "tags/#{tag_sanitize(tag)}.html" }
          site.pages << TagPage.new(site, tag, posts)
        end
      end
  
      def generate(site)
        handler = TagHandler.new
        handler.check(site.posts.docs)
        handler.tags.each do |name, tag|
          create_page(site, tag['name'], tag['posts'])
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
        @basename = tag_sanitize(tag)      # filename without the extension.
        @ext      = '.html'                # the extension.
        @name     = "#{@basename}.html"          # basically @basename + @ext.

        info = site.config['tags_config'].find { |search| search['name'] == tag }
  
        # Initialize data hash with a key pointing to all posts under current category.
        # This allows accessing the list in a template via `page.linked_docs`.
        @data = {
          'posts' => posts,
          'title' => info ? info['title'] : tag.capitalize,
          'tag' => tag
        }

        @content = info ? info['description'] : 'Aprender a programar pode ser um desafio. Me siga que eu vou te ajudar nesse processo. Programar mudou a minha vida e tenho certeza que pode mudar a sua!'
  
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

Liquid::Template.register_filter(Jekyll::TagsFilter)