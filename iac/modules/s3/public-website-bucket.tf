output "website_bucket_regional_domain_name" {
  value = aws_s3_bucket.gs_web.bucket_regional_domain_name
}

resource "aws_s3_bucket" "gs_web" {
  bucket = "${var.site_name}"

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