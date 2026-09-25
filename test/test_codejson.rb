require "test/unit"
require "json"
require "json_schemer"

class TestCodeJson < Test::Unit::TestCase
  def test_valid_code_json
    schema_path = File.join(__dir__, "schema", "code", "schema-2.0.0.json")
    codejson_path = File.join(__dir__, "..", "code.json")
    schema = JSON.load_file(schema_path)
    codejson = JSON.load_file(codejson_path)
    schemer = JSONSchemer.schema(schema)
    errors = schemer.validate(codejson).map do |err|
      "#{err['data_pointer']}: #{err['error']}"
    end
    assert_empty errors, "code.json failed schema validation:\n#{errors.join("\n")}"
  end
end
