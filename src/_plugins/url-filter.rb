def tag_sanitize(tag)
  tag && tag.downcase.gsub(/\s/, "-")
end

module Jekyll
    module UrlFilter
      def tag_url(input)
        "#{@context.registers[:site].config['url']}/tags/#{tag_sanitize(input)}.html"
      end
    end
end
  
Liquid::Template.register_filter(Jekyll::UrlFilter)