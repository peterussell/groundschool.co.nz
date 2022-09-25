# GroundSchool IaC

This project provides Infrastructure as Code (IaC) for the GroundSchool NZ website.

### Pre-requisites

Terraform state is stored remotely in S3 buckets which need to be created before
planning or applying the main resources.

Run this locally to create them (should only be required once):

```
$ cd remote-state
$ terraform init -backend-config="..."    ### see required parameters
$ terraform plan
$ terraform apply
```

Running terraform init locally with remote state requires `-backend-config`
arguments to be provided for `bucket`, `key` (the TF state filename), and
`role_arn` for the role you want to assume.

*NB. this is due not to being able to use variables in the AWS provider's
S3 backend block, so we need to pass these values in from the command line in
order to configure them per-environment. The GitHub actions workflows configure
these automatically.*

For example:
```
terraform init -backend-config="bucket=..." -backend-config="key=..." -backend-config="role_arn=..."
```

Once created, return to the `/iac` directory and `plan`/`apply` the main
infrastructure scripts.