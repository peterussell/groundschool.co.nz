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

### Modules

module "ecr" {
  source = "./modules/ecr"

  # Variables
  environment = "${var.environment}"
}

module "iam" {
  source = "./modules/iam"

  # Variables
  environment = "${var.environment}"
}
