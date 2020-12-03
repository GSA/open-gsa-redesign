require "eslintrb"
require "html-proofer"
require "rake/testtask"

desc "Serve the site with live reload for development"
task :serve do
  sh "bundle exec jekyll liveserve", verbose: false
end

# This option may cause pages to not be rebuilt when an underlying data file
# (e.g., _data/*.yml) changes. In most cases it's OK, but you may need to use
# the 'serve' task instead if changing data files.
desc "Serve the site with live reload for development (incremental builds)"
task :incrementalserve do
  sh "bundle exec jekyll liveserve --incremental", verbose: false
end

desc "Build the site to the default Jekyll output directory"
task :build do
  puts "Building the website..."
  sh "bundle exec jekyll build -q", verbose: false
end

namespace :test do
  Rake::TestTask.new do |t|
    t.name = "unit"
    t.libs << "test"
    t.test_files = FileList['test/test_*.rb']
    t.verbose = true
    t.warning = false
  end

  desc "Run ESLint"
  task :eslint do
    puts "Running ESLint..."
    puts Eslintrb.report(Dir.glob("assets/js/*.js"), :eslintrc)
  end

  namespace :htmlproofer do
    desc "Run HTML Proofer on internal links"
    task :internal do
      puts "Building the website..."
      sh "bundle exec jekyll build -q -d _test", verbose: false
      puts "Running HTML Proofer on internal links..."
      options = {
        allow_hash_href: true,
        check_html: true,
        empty_alt_ignore: true,
        disable_external: true
      }
      HTMLProofer.check_directory("./_test", options).run
    end

    desc "Run HTML Proofer on all links"
    task :all do
      puts "Building the website..."
      sh "bundle exec jekyll build -q -d _test", verbose: false
      puts "Running HTML Proofer on all links..."
      options = {
        allow_hash_href: true,
        check_html: true,
        empty_alt_ignore: true
      }
      HTMLProofer.check_directory("./_test", options).run
    end
  end

  desc "Run all tests"
  task all: ["unit", "eslint", "htmlproofer:all"]

  # Don't check external links for CI since it's too much overhead. External links
  # should be tested locally before pushing.
  desc "Run continuous integration tests"
  task ci: ["unit", "eslint", "htmlproofer:internal"]
end

task test: ["test:all"]

task default: :test
