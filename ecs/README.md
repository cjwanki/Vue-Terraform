# Vue ECS Production (Project 3)

Production-grade ECS Fargate + ALB + Auto Scaling.

## What is created

- ECS Cluster with Container Insights
- Task Definition (points to your ECR image)
- ECS Service with **2 tasks across 2 AZs**
- Application Load Balancer + Target Group + HTTP listener
- IAM Execution Role + Task Role
- CloudWatch Log Group
- Application Auto Scaling (CPU + Memory)

## How to deploy

```bash
cd ecs
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars with your real VPC ID and two public subnet IDs

terraform init
terraform plan
terraform apply
```

After apply, use the `alb_url` output to open the application.
