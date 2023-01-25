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

provider "aws" {
  alias = "virginia"
  region = "us-east-1"
}

module "route53" {
  source = "./modules/route53"
  cloudfront_domain_name = "${module.cloudfront.cloudfront_domain_name}"
  cloudfront_hosted_zone_id = "${module.cloudfront.cloudfront_hosted_zone_id}"
  environment = "${var.environment}"
  site_name = "${var.site_name}"
}

module "acm" {
  source = "./modules/acm"
  provider = aws.virginia
  route53_zone_id = "${module.route53.route53_zone_id}"
  environment = "${var.environment}"
  site_name = "${var.site_name}"
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
  certificate_arn = "${module.acm.gs_cert_arn}"
}

### Outputs
output "github_deployer_secret" {
  value = "${module.iam.github_deployer_secret}"
  sensitive =  true
}
