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

# Used to get the existing SSL certificate from us-east-1
provider "aws" {
  alias = "virginia"
  region = "us-east-1"
}

data "aws_acm_certificate" "gs_certificate" {
  domain = "groundschool.co.nz"
  statuses = ["ISSUED"]
  provider = aws.virginia
}

module "iam" {
  source = "./modules/iam"
  environment = "${var.environment}"
}

module "s3" {
  source = "./modules/s3"
  environment = "${var.environment}"
  site_name = "${var.site_name}"
}

module "cloudfront" {
  source = "./modules/cloudfront"
  environment = "${var.environment}"
  site_name = "${var.site_name}"
  website_bucket_regional_domain_name = "${module.s3.website_bucket_regional_domain_name}"
  certificate_arn = "${data.aws_acm_certificate.gs_certificate}"
}

### Outputs
output "github_deployer_secret" {
  value = "${module.iam.github_deployer_secret}"
  sensitive =  true
}
