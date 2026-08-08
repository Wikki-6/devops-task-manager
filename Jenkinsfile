pipeline {
    agent any

    environment {
        IMAGE_NAME = 'devops-task-manager'
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                bat 'echo Running basic validation...'
                bat 'if exist index.html (echo index.html found) else exit /b 1'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:%IMAGE_TAG% .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker rm -f devops-container || exit 0'
                bat 'docker run -d -p 8083:80 --name devops-container %IMAGE_NAME%:%IMAGE_TAG%'
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}
