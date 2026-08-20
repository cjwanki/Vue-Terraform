provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "Vue-ECS-Production"
      Environment = var.environment
      ManagedBy   = "Terraform"
      Owner       = "CJ-Wanki"
    }
  }
}
