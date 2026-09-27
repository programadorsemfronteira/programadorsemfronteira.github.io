# frozen_string_literal: true

require "minitest/autorun"
require "yaml"

class ContentLocalizationTest < Minitest::Test
  ROOT = File.expand_path("..", __dir__)
  LOCALES = %w[en pt-br es].freeze
  AUTHORED_PATHS = %w[
    AGENTS.md
    CODEX_HANDOFF_PORTFOLIO_REDESIGN.md
    PORTFOLIO_CONTEXT.md
    src
    test
  ].freeze
  NON_ENGLISH_FORBIDDEN_COPY = [
    "Journey chapter navigation",
    "Career timeline",
    "The problem:",
    "WHAT I LEARNED",
    "MINDSET FORGED",
    "The next chapter called for a wider system.",
    "SEE THE WORK",
    "THE NEXT CHAPTER",
    "More than a résumé,",
    "a life in progress.",
    "CHAPTER 01",
    "ENGINEERING · SYSTEMS · DELIVERY",
    "Previous image",
    "Next image",
    "INTERNAL SCREENSHOT",
    "FULL-STACK OWNERSHIP",
    "VERIFICATION PATH",
    "TRAINING ENVIRONMENTS",
    "TOOL-DRIVEN WORKFLOWS",
    "RETRIEVAL LAYER",
    "MESSAGES LOST IN AWS OUTAGE",
    "FEWER RUNTIME ERRORS",
    "CONCURRENT USERS",
    "DOWNTIME IN MIGRATION"
  ].freeze

  def test_authored_and_generated_files_do_not_use_em_dashes
    files = AUTHORED_PATHS.flat_map { |path| text_files(File.join(ROOT, path)) }
    files.concat(text_files(File.join(ROOT, "docs"), generated: true))
    offenders = files.select { |file| File.binread(file).force_encoding("UTF-8").include?("\u2014") }

    assert_empty offenders.map { |file| relative(file) }, "Replace Unicode U+2014 with clearer punctuation"
  end

  def test_all_locales_have_matching_portfolio_and_journey_structures
    portfolio = yaml("src/_data/portfolio.yml")
    timeline = yaml("src/_data/timeline.yml")

    assert_equal (LOCALES + ["tags"]).sort, portfolio.keys.sort
    assert_equal LOCALES.sort, timeline.keys.sort
    assert_equal [11], LOCALES.map { |locale| portfolio.fetch(locale).fetch("projects").length }.uniq
    assert_equal [7], LOCALES.map { |locale| timeline.fetch(locale).fetch("chapters").length }.uniq
  end

  def test_every_work_case_has_complete_portuguese_and_spanish_copy
    details = yaml("src/_data/work_details.yml")
    required = %w[labels role challenge approach impact lesson metrics]
    missing = []

    details.each do |project, data|
      next unless data["translations"]

      %w[pt-br es].each do |locale|
        translation = data.fetch("translations").fetch(locale, {})
        required.each { |field| missing << "#{project}.#{locale}.#{field}" unless translation.key?(field) }
      end
    end

    assert_empty missing
  end

  def test_non_english_pages_do_not_render_known_english_fallback_copy
    offenders = []

    %w[pt-br es].each do |locale|
      Dir[File.join(ROOT, "docs", locale, "**", "*.html")].sort.each do |file|
        body = File.read(file)
        NON_ENGLISH_FORBIDDEN_COPY.each do |phrase|
          offenders << "#{relative(file)}: #{phrase}" if body.include?(phrase)
        end
      end
    end

    assert_empty offenders
  end

  def test_generated_portfolio_pages_declare_the_selected_language
    LOCALES.each do |locale|
      Dir[File.join(ROOT, "docs", locale, "**", "*.html")].sort.each do |file|
        assert_includes File.read(file), %(<html lang="#{locale}">), relative(file)
      end
    end
  end

  private

  def yaml(path)
    YAML.safe_load(File.read(File.join(ROOT, path)), aliases: true)
  end

  def text_files(path, generated: false)
    return [path] if File.file?(path)

    Dir[File.join(path, "**", "*")].select do |file|
      next false unless File.file?(file)
      next false if file.include?("/assets/lib/") || file.include?("/vendor/") || file.end_with?(".map", ".map.json")

      extensions = generated ? %w[.html .css .js .xml .txt] : %w[.html .css .js .md .markdown .rb .scss .toml .yml .yaml]
      extensions.include?(File.extname(file))
    end
  end

  def relative(path)
    path.delete_prefix("#{ROOT}/")
  end
end
