class AbstractValidator
  
  attr_writer :next_validator, :parent, :child_field, :mandatory, :optionals

  def initialize(child_field = false, mandatory = [], optionals = [])
    @child_field = child_field
    @mandatory = ['name'].concat(mandatory).uniq
    @optionals = optionals
  end

  def next_validator(handler)
    handler.parent = self
    @next_validator = handler
    handler
  end

  def message(input)
    raise NotImplementedError, "#{self.class} has not implemented method '#{__method__}'"
  end

  def show_error(input, append = '')
    if (is_valid(input))
      return
    end
    puts "#{append}#{message(input)}"
    @mandatory.each do |field|
      if !input[field]
        puts "#{append} Field #{field} does not exist"
      end
    end
    
    input.keys.each do |field|
      if !@mandatory.include?(field) && !@optionals.include?(field)
        puts "#{append} Field #{field} is not allowed"
      end
    end

    if @next_validator && @child_field && input[@child_field]
      input[@child_field].each { |child| @next_validator.show_error(child, " #{append}") }
    end
  end

  def validate(input)
    if @parent 
      return @parent.validate(input)
    end

    input.each do |subject|
      if !is_valid(subject) 
        show_error(subject)
      end
    end
  end

  protected

  def set_parent(parent) 
    @parent = parent
  end

  def run_validate(input)
    input.each do |subject|
      if !is_valid(subject) 
        return false
      end
    end
    return true
  end

  def validate_next(input)
    return @next_validator.run_validate(input) if @next_validator
    true
  end

  def show_name(input)
    input['name'] ? "#{input['name']}" : ''
  end

  def is_valid(input)
    if input.count != @mandatory.count 
      false
    end
  
    @mandatory.each do |field|
      if !input[field]
        return false
      end
    end

    input.keys.each do |field|
      if !@mandatory.include?(field) && !@optionals.include?(field)
        return false
      end
    end

    if input[@child_field] && !validate_next(input[@child_field])
      return false
    end
    true
  end
end

class CountriesValidator < AbstractValidator

  def initialize
    super('states', ['states'])
  end

  def message(input)
    "Country #{show_name(input)} has errors"
  end
end

class StatesValidator < AbstractValidator

  def initialize
    super('cities', ['cities'])
  end

  def message(input)
    "State #{show_name(input)} has errors"
  end
end

class CitiesValidator < AbstractValidator

  def initialize
    super('beaches', [], ['beaches'])
  end

  def message(input)
    "City #{show_name(input)} has errors"
  end
end

class BeachesValidator < AbstractValidator
  
  def message(input)
    "Beach #{show_name(input)} has errors"
  end
end

def validate_countries(input)
  CountriesValidator.new
    .next_validator(StatesValidator.new)
    .next_validator(CitiesValidator.new)
    .next_validator(BeachesValidator.new)
    .validate(input)
end

module Jekyll
    module TripFilter
      def countries_count(input)
        validate_countries(input)
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