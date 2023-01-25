resource "aws_route53_zone" "hosted-zone" {
  name = "${var.site_name}"

  tags = {
    Environment = "${var.environment}"
  }
}
