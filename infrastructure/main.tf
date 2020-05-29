terraform {
  backend "s3" {
    encrypt        = true
    bucket         = "grocky-tfstate"
    dynamodb_table = "tfstate-lock"
    region         = "us-east-1"
    key            = "www.rockygray.com/terraform.tfstate"
  }
}

provider "aws" {
  region = var.region
}

variable "root_domain_name" {
  default = "rockygray.com"
}

variable "www_domain_name" {
  default = "www.rockygray.com"
}

variable "region" {
  default = "us-east-1"
}

module "root" {
  source = "github.com/grocky/infrastructure//modules/root-domain"

  root_domain_name = var.root_domain_name
}

module "email_forwarder" {
  source    = "github.com/cloudposse/terraform-aws-ses-lambda-forwarder"
  namespace = "rockygray.com"
  stage     = "prod"
  name      = "email"
  tags = {
    Env         = "prod"
    Application = "www.rockygray.com"
  }

  region      = var.region
  domain      = "rockygray.com"
  relay_email = "rocky@rockygray.com"
  spf         = "v=spf1 include:amazonses.com -all"
  forward_emails = {
    "@rockygray.com" = ["rocky.grayjr@gmail.com"]
  }

  lambda_runtime = var.lambda_runtime

  artifact_url      = var.artifact_url
  artifact_filename = var.artifact_filename
}
