terraform {
  backend "s3" {
    bucket         = "vue-dev-app-buckettt"
    key            = "prod/terraform.tfstate"         # Use a unique path per environment
    region         = "us-west-2"
    dynamodb_table = "vue-prod-app-db"
    use_lockfile   = true
    encrypt        = true
  }
}

