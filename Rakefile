require "eslintrb"
require "html-proofer"

desc "Serve the site with live reload for development"
task :serve do
  sh "bundle exec jekyll liveserve", verbose: false
end

desc "Build the site to the default Jekyll output directory"
task :build do
  puts "Building the website..."
  sh "bundle exec jekyll build -q", verbose: false
end

desc "Deploy the site by merging a branch into master and pushing to origin"
task :deploy, [:branch] do |task, args|
  branch = args[:branch]
  if branch.nil?
    puts "You must specify a branch to deploy (e.g. 'rake deploy[dev]')"
  else
    sh <<-EOS, { verbose: false }
      SOURCE_BRANCH=#{branch}
      PROD_BRANCH=master
      INITIAL_BRANCH=`git symbolic-ref --short HEAD`
      git fetch -q origin $PROD_BRANCH
      git checkout -q $PROD_BRANCH
      echo "Merging branch '${SOURCE_BRANCH}' and pushing..."
      git merge $SOURCE_BRANCH && git push origin $PROD_BRANCH
      git checkout -q $INITIAL_BRANCH
    EOS
  end
end

namespace :test do
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
  task all: ["eslint", "htmlproofer:all"]

  # Don't check external links for CI since it's too much overhead. External links
  # should be tested locally before pushing.
  desc "Run continuous integration tests"
  task ci: ["eslint", "htmlproofer:internal"]
end

task test: ["test:all"]

task default: :test
