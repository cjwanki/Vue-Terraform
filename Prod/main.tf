name=Prod/main.tf
# Configure Terraform version and required providers
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Local variables for common tags and configuration
locals {
  common_tags = {
    Environment = "Production"
    Project     = "Vue-App"
    ManagedBy   = "Terraform"
  }
}
