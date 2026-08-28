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

resource "aws_instance" "vue_prod_web_1" {
  ami           = "ami-066a7fbea5161f451"  # Replace with your AMI ID
  instance_type = "t3.micro"       # Adjust instance type as needed
  subnet_id              = aws_subnet.public_subnet_1.id
  vpc_security_group_ids = [aws_security_group.vpc_web_sg.id]
  
  tags = {
    Name = "vue-prod-web-1"
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
