output "website_bucket_regional_domain_name" {
  value = aws_s3_bucket.gs_web.bucket_regional_domain_name
}

resource "aws_s3_bucket" "gs_web" {
  # Ugh, gross. So we deployed 'stage.groundschool.co.nz' as the staging web bucket
  # using ${var.site_name}, but then realized we couldn't use this for prod because
  # we want the bucket to have the env prefix (prod.groundschool.co.nz) but the
  # site_name variable doesn't have this for prod.

  # In order to keep staging='stage.groundschool.co.nz' and prod='prod.groundschool.co.nz'
  # we have to use the environment prefix for prod, but the site name for stage.
  bucket = var.environment == "prod" ? "${var.environment}.groundschool.co.nz" : "${var.site_name}"

  tags = {
    Environment = "${var.environment}"
  }
}

resource "aws_s3_bucket_acl" "gs_web_acl" {
  bucket = "${aws_s3_bucket.gs_web.id}"
  acl = "public-read"
}

resource "aws_s3_bucket_website_configuration" "gs_web_website_configuration" {
  bucket = "${aws_s3_bucket.gs_web.bucket}"

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}