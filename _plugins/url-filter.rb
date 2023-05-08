module Jekyll
    module UrlFilter
      def tag_url(input)
        "#{@context.registers[:site].config['url']}/tags/#{input}"
      end
    end
end
  
Liquid::Template.register_filter(Jekyll::UrlFilter)