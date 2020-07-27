require "test/unit"
require "json-schema"

class TestCodeJson < Test::Unit::TestCase
  def test_valid_code_json
    schema_path = File.join(__dir__, "schema", "code", "schema-2.0.0.json")
    codejson_path = File.join(__dir__, "..", "code.json")
    assert_nothing_raised(JSON::Schema::ValidationError) {
      JSON::Validator.validate!(schema_path, codejson_path)
    }
  end
end
