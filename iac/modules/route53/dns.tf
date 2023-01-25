output "route53_zone_id" {
  value = aws_route53_zone.groundschool.zone_id
}

resource "aws_route53_zone" "groundschool" {
  name = "${var.site_name}"

  tags = {
    Environment = "${var.environment}"
  }
}

resource "aws_route53_record" "web" {
  zone_id = aws_route53_zone.groundschool.zone_id
  name = "${var.site_name}"
  type = "A"
  
  alias {
    name = "${var.cloudfront_domain_name}"
    zone_id = "${var.cloudfront_hosted_zone_id}"
    evaluate_target_health = false
  }
}
