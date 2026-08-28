terraform {
  backend "s3" {
    bucket         = "vue-dev-app-buckettt"
    key            = "prod/terraform.tfstate"
    region         = "us-west-2"
    dynamodb_table = "vue-prod-app-db"
    encrypt        = true
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
