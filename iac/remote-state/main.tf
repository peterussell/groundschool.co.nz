terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws",
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "ap-southeast-2"

  assume_role {
    role_arn = "${var.deployer_role_arn}"
  }
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = "groundschool.co.nz-tf-state-${var.environment}"

  lifecycle {
    prevent_destroy = true
  }

  tags = {
    Environment = "${var.environment}"
  }
}

resource "aws_s3_bucket_versioning" "terraform_state_versioning" {
  bucket = "${aws_s3_bucket.terraform_state.id}"
  
  versioning_configuration {
    status = "Enabled"
  }
}

# NB. uncomment to enable state locking using DynamoDB
# (not required now while doing solo deploys)

# resource "aws_dynamodb_table" "terraform_state_lock" {
#   name           = "gs-terraform-state"
#   read_capacity  = 1
#   write_capacity = 1
#   hash_key       = "LockID"

#   attribute {
#     name = "LockID"
#     type = "S"
#   }
# }
