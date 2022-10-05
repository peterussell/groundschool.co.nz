terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws",
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"

  backend "s3" {
    region = "ap-southeast-2"
  }
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

module "s3" {
  source = "./modules/s3"

  # Variables
  environment = "${var.environment}"
}

### Outputs
output "github_deployer_secret" {
  value = "${module.iam.github_deployer_secret}"
  sensitive =  true
}
