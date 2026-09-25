require "test/unit"
require "json"
require "json_schemer"

class TestDataJson < Test::Unit::TestCase
  SCHEMA_DIR = File.join(__dir__, "schema", "data")

  REF_RESOLVER = proc do |uri|
    name = uri.path.split("/").last
    path = Dir.glob(File.join(SCHEMA_DIR, "*.json")).find do |f|
      File.basename(f, ".json").casecmp?(name)
    end
    raise "No local schema for ref: #{uri} (looked for #{name})" unless path
    JSON.load_file(path)
  end

  def test_valid_data_json
    schema_path = File.join(SCHEMA_DIR, "Catalog.json")
    datajson_path = File.join(__dir__, "..", "data.json")
    schema = JSON.load_file(schema_path)
    datajson = JSON.load_file(datajson_path)
    schemer = JSONSchemer.schema(schema, ref_resolver: REF_RESOLVER)
    errors = schemer.validate(datajson).map do |err|
      "#{err['data_pointer']}: #{err['error']}"
    end
    assert_empty errors, "data.json failed DCAT-US 3.0 validation:\n#{errors.join("\n")}"
  end
end
