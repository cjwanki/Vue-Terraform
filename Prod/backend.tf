terraform {
  backend "s3" {
    bucket         = "vue-dev-app-buckettt"
    key            = "prod/terraform.tfstate"
    region         = "us-west-2"
    dynamodb_table = "vue-prod-app-db"
    encrypt        = true
  }
}
