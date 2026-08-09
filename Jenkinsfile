pipeline {

    agent any

    environment {
        IMAGE_NAME = 'devops-task-manager'
        IMAGE_TAG  = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Terraform Init') {
            steps {
                dir('terraform') {
                    bat 'terraform init'
                }
            }
        }

        stage('Terraform Validate') {
            steps {
                dir('terraform') {
                    bat 'terraform validate'
                }
            }
        }

        stage('Terraform Plan') {
            steps {
                dir('terraform') {
                    bat 'terraform plan'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:%IMAGE_TAG% .'
            }
        }

        stage('Ansible Deployment') {
            steps {
                bat '''
                    wsl bash -lc "cd /mnt/g/devops-task-manager/ansible && ansible-playbook -i inventory.ini deploy.yml"
                '''
            }
        }

        stage('Verify Kubernetes') {
            steps {
                bat '''
                    wsl bash -lc "kubectl get nodes"
                    wsl bash -lc "kubectl get pods -A"
                    wsl bash -lc "kubectl get services -A"
                '''
            }
        }
    }

    post {

        success {
            echo '========================================'
            echo '  DEVOPS PIPELINE COMPLETED SUCCESSFULLY'
            echo '========================================'
            echo 'Terraform: SUCCESS'
            echo 'Docker: SUCCESS'
            echo 'Ansible: SUCCESS'
            echo 'Kubernetes: SUCCESS'
        }

        failure {
            echo '========================================'
            echo '  DEVOPS PIPELINE FAILED'
            echo '========================================'
        }
    }
}
