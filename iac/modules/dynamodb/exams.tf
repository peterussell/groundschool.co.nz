resource "aws_dynamodb_table" "exams-table" {
  name = "exams"
  billing_mode = "PROVISIONED"
  read_capacity = 1
  write_capacity = 1
  hash_key = "id"

  attribute {
    name = "id"
    type = "S"
  }

  attribute {
    name = "licenseType"
    type = "S"
  }

  global_secondary_index {
    name = "licenseTypeIndex"
    hash_key = "licenseType"
    read_capacity = 1
    write_capacity = 1
    projection_type = "ALL"
  }

  tags = {
    Environment = "${var.environment}"
  }
}