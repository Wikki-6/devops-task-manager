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

        stage('Terraform Apply') {
            steps {
                dir('terraform') {
                    bat 'terraform apply -auto-approve'
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
                wsl.exe -d Ubuntu-24.04 -- bash -lc "cd /mnt/g/devops-task-manager/ansible && ansible-playbook -i inventory.ini deploy.yml"
                '''
            }
        }

        stage('Verify Kubernetes') {
            steps {
                bat '''
                kubectl get nodes
                kubectl get pods -A
                kubectl get services -A
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                bat '''
                kubectl get deployments
                kubectl get pods
                kubectl get services
                '''
            }
        }
    }

    post {
        success {
            echo 'DevOps pipeline completed successfully!'
            echo '''
            ========================================================
                    DEVOPS PIPELINE COMPLETED SUCCESSFULLY
            ========================================================

            CHECKOUT         : SUCCESS
            TERRAFORM INIT   : SUCCESS
            TERRAFORM VALID. : SUCCESS
            TERRAFORM PLAN   : SUCCESS
            TERRAFORM APPLY  : SUCCESS
            DOCKER BUILD     : SUCCESS
            ANSIBLE          : SUCCESS
            KUBERNETES       : SUCCESS

            ========================================================
            '''
        }

        failure {
            echo 'Pipeline failed. Check the console output for errors.'
            echo '''
            ========================================================
                    DEVOPS PIPELINE FAILED
            ========================================================

            Check the failed stage in the Jenkins console output.

            ========================================================
            '''
        }

        always {
            echo "Build Number: ${BUILD_NUMBER}"
            echo 'Pipeline execution completed.'
        }
    }
}