resource "aws_iam_user" "sls_deployer" {
  name = "sls_deployer"

  tags = {
    Environment = "${var.environment}"
  }
}

resource "aws_iam_access_key" "sls_deployer_access_key" {
  user = "${aws_iam_user.sls_deployer.name}"
}

resource "aws_iam_user_policy" "sls_deployer_policy" {
  name = "sls_deployer_policy"
  user = "${aws_iam_user.sls_deployer.name}"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "lambda:*",
        "execute-api:*",
        "cloudFormation:*",
        "s3:*",
        "iam:*"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOF
}

# NB. changing this secret will write the secret value to the output of
# terraform plan. This needs to be run locally to avoid the secret being
# written to the GitHub workflow logs.
# Once terraform apply has been run, the secret value can be accessed with
# 'terraform output -json'.
output "sls_deployer_secret" {
  value = "${aws_iam_access_key.sls_deployer_access_key.secret}"
  sensitive = true
}