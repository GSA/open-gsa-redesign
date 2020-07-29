require "test/unit"
require "json-schema"

class TestDataJson < Test::Unit::TestCase
  def test_valid_data_json
    schema_path = File.join(__dir__, "schema", "data", "catalog.json")
    datajson_path = File.join(__dir__, "..", "data.json")
    assert_nothing_raised(JSON::Schema::ValidationError) {
      JSON::Validator.validate!(schema_path, datajson_path, schema_reader: SchemaReader.new)
    }
  end
end

# Due to invalid URIs in the data.gov schemas, use a local copy of schemas as a workaround.
class SchemaReader < JSON::Schema::Reader
  def read(location)
    filename = URI(location).path.split('/').last
    body = read_file(File.join(__dir__, "schema", "data", filename))
    JSON::Schema.new(JSON::Validator.parse(body), location)
  end
end
