module Jekyll
    module TripFilter
      def countries_count(input)
        "#{input.count}"
      end
      def states_count(input)
        states = 0
        input.each { |country| states += country['states'].count }
        "#{states}"
      end
      def cities_count(input)
        cities = 0
        input.each { |country| country['states'].each { |state| cities += state['cities'].count } }
        "#{cities}"
      end
      def beaches_count(input)
        beaches = 0
        input.each do |country|
            country['states'].each do |state|
                state['cities'].each { |city| beaches += city['beaches'] ? city['beaches'].count : 0 }
            end
        end
        "#{beaches}"
      end
    end
end
  
Liquid::Template.register_filter(Jekyll::TripFilter)