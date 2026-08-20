variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-west-2"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "prod"
}

variable "project_name" {
  description = "Project / application name"
  type        = string
  default     = "vue"
}

variable "vpc_id" {
  description = "Existing VPC ID"
  type        = string
}

variable "public_subnet_ids" {
  description = "List of public subnet IDs (at least 2 AZs)"
  type        = list(string)
}

variable "container_image" {
  description = "Full ECR image URI"
  type        = string
  default     = "147330899799.dkr.ecr.us-west-2.amazonaws.com/vue-app:latest"
}

variable "container_port" {
  description = "Container port"
  type        = number
  default     = 80
}

variable "desired_count" {
  description = "Desired number of ECS tasks"
  type        = number
  default     = 2
}

variable "cpu" {
  type    = number
  default = 256
}

variable "memory" {
  type    = number
  default = 512
}

variable "domain_name" {
  description = "Domain name for ACM certificate. Leave empty to skip HTTPS."
  type        = string
  default     = ""
}
