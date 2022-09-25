resource "aws_s3_bucket" "gs_web" {
  bucket = "${var.environment}.groundschool.co.nz"

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