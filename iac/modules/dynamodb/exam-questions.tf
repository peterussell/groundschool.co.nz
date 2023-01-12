resource "aws_dynamodb_table" "exam-questions-table" {
  name = "exam-questions"
  billing_mode = "PROVISIONED"
  read_capacity = 1
  write_capacity = 1
  hash_key = "id"

  attribute {
    name = "id"
    type = "S"
  }

  attribute {
    name = "examId"
    type = "S"
  }

  global_secondary_index {
    name = "examIdIndex"
    hash_key = "examId"
    read_capacity = 1
    write_capacity = 1
    projection_type = "ALL"
  }

  tags = {
    Environment = "${var.environment}"
  }
}
