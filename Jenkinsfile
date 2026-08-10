pipeline {
    agent any

    environment {
        IMAGE_NAME = 'devops-task-manager'
        IMAGE_TAG  = "${BUILD_NUMBER}"
    }

    stages {

        /*
         * ============================================================
         * 1. CHECKOUT SOURCE CODE
         * ============================================================
         */
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        /*
         * ============================================================
         * 2. TERRAFORM INITIALIZATION
         * ============================================================
         */
        stage('Terraform Init') {
            steps {
                dir('terraform') {
                    bat 'terraform init'
                }
            }
        }

        /*
         * ============================================================
         * 3. TERRAFORM VALIDATION
         * ============================================================
         */
        stage('Terraform Validate') {
            steps {
                dir('terraform') {
                    bat 'terraform validate'
                }
            }
        }

        /*
         * ============================================================
         * 4. TERRAFORM PLAN
         * ============================================================
         */
        stage('Terraform Plan') {
            steps {
                dir('terraform') {
                    bat 'terraform plan'
                }
            }
        }

        /*
         * ============================================================
         * 5. TERRAFORM APPLY
         * ============================================================
         */
        stage('Terraform Apply') {
            steps {
                dir('terraform') {
                    bat 'terraform apply -auto-approve'
                }
            }
        }

        /*
         * ============================================================
         * 6. BUILD DOCKER IMAGE
         * ============================================================
         */
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:%IMAGE_TAG% .'
                bat 'docker tag %IMAGE_NAME%:%IMAGE_TAG% %IMAGE_NAME%:latest'
            }
        }

        /*
         * ============================================================
         * 7. LOAD IMAGE INTO MINIKUBE
         * ============================================================
         */
        stage('Load Image Into Minikube') {
            steps {
                bat 'minikube image load %IMAGE_NAME%:latest'
            }
        }

        /*
         * ============================================================
         * 8. DEPLOY TO KUBERNETES USING ANSIBLE
         * ============================================================
         */
        stage('Ansible Deployment') {
            steps {
                bat '''
                wsl.exe -d Ubuntu-24.04 -- bash -lc "cd /mnt/g/devops-task-manager/ansible && ansible-playbook -i inventory.ini deploy.yml"
                '''
            }
        }

        /*
         * ============================================================
         * 9. VERIFY KUBERNETES CLUSTER
         * ============================================================
         */
        stage('Verify Kubernetes') {
            steps {
                bat '''
                kubectl get nodes
                kubectl get pods -A
                kubectl get services -A
                '''
            }
        }

        /*
         * ============================================================
         * 10. ZERO-DOWNTIME ROLLING UPDATE
         * ============================================================
         */
        stage('Rolling Update') {
            steps {
                bat '''
                kubectl rollout restart deployment/devops-task-manager
                '''
            }
        }

        /*
         * ============================================================
         * 11. WAIT FOR ROLLOUT COMPLETION
         * ============================================================
         */
        stage('Wait For Rollout') {
            steps {
                bat '''
                kubectl rollout status deployment/devops-task-manager --timeout=180s
                '''
            }
        }

        /*
         * ============================================================
         * 12. VERIFY FINAL DEPLOYMENT
         * ============================================================
         */
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

    /*
     * ================================================================
     * POST BUILD
     * ================================================================
     */
    post {

        success {
            echo 'DevOps zero-downtime pipeline completed successfully!'
            echo '''
            ========================================================
                    ZERO DOWNTIME DEPLOYMENT SUCCESSFUL
            ========================================================

            CHECKOUT              : SUCCESS
            TERRAFORM INIT        : SUCCESS
            TERRAFORM VALIDATE    : SUCCESS
            TERRAFORM PLAN        : SUCCESS
            TERRAFORM APPLY       : SUCCESS
            DOCKER BUILD          : SUCCESS
            IMAGE LOADED          : SUCCESS
            ANSIBLE DEPLOYMENT    : SUCCESS
            KUBERNETES VERIFIED   : SUCCESS
            ROLLING UPDATE        : SUCCESS
            ROLLOUT COMPLETED     : SUCCESS

            ZERO DOWNTIME ACHIEVED

            ========================================================
            '''
        }

        failure {
            echo 'Pipeline failed. Check the console output for errors.'
            echo '''
            ========================================================
                    DEPLOYMENT FAILED
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