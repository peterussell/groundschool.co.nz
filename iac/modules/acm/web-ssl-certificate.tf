output "gs_cert_arn" {
  value = aws_acm_certificate_validation.gs_cert_validation.arn
}

resource "aws_acm_certificate" "gs_cert" {
  domain_name = "${var.site_name}"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Environment = "${var.environment}"
  }
}

resource "aws_route53_record" "gs_cert_validation_records" {
  for_each = {
    for dvo in aws_acm_certificate.gs_cert.domain_validation_options : dvo.domain_name => {
      name = dvo.resource_record_name
      record = dvo.resource_record_value
      type = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name = each.value.name
  records = [each.value.record]
  ttl = 60
  type = each.value.type
  zone_id = "${var.route53_zone_id}"
}

resource "aws_acm_certificate_validation" "gs_cert_validation" {
  certificate_arn = aws_acm_certificate.gs_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.gs_cert_validation_records : record.fqdn]
}
