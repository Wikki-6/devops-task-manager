resource "null_resource" "docker_setup" {
  provisioner "local-exec" {
    command = "docker images"
  }

  triggers = {
    environment = var.environment
  }
}

resource "null_resource" "kubernetes_check" {
  provisioner "local-exec" {
    command = "kubectl get nodes"
  }

  depends_on = [null_resource.docker_setup]
}