resource "aws_iam_user" "github_deployer" {
  name = "github_deployer"

  tags = {
    Environment = "${var.environment}"
  }
}

resource "aws_iam_access_key" "github_deployer_access_key" {
  user = "${aws_iam_user.github_deployer.name}"
}

resource "aws_iam_user_policy" "github_deployer_policy" {
  name = "github_deployer_policy"
  user = "${aws_iam_user.github_deployer.name}"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOF
}

# NB. changing this secret will write the secret value to the output of
# terraform plan. This either needs to be a) run locally to avoid the secret being
# written to the GitHub workflow logs, or b) have the secret changed via the
# AWS CLI or console immediately after deploy.

# Once terraform apply has been run, the secret value can be accessed with
# 'terraform output -json'.
output "github_deployer_secret" {
  value = "${aws_iam_access_key.github_deployer_access_key.secret}"
  sensitive = true
}