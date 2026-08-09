resource "null_resource" "project_setup" {
  provisioner "local-exec" {
    command = "echo Terraform integrated with devops-task-manager project"
  }

  triggers = {
    environment = var.environment
  }
}