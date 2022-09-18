resource "aws_s3_bucket" "gs_web" {
  bucket = "groundschool.co.nz"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }

  website_domain = "${var.site_name}"

  tags = {
    Environment = "${var.environment}"
  }
}

resource "aws_s3_bucket_acl" "gs_web_acl" {
  bucket = "${aws_s3_bucket.gs_web.id}"
  acl = "public_read"
}
