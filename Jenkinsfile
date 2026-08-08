pipeline {
    agent any

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
                bat "docker build -t devops-task-manager:%BUILD_NUMBER% ."
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker rm -f devops-container || exit 0'
                bat "docker run -d -p 8083:80 --name devops-container devops-task-manager:%BUILD_NUMBER%"
            }
        }
    }

    post {
        success {
            echo "Build #${env.BUILD_NUMBER} completed successfully!"
        }

        failure {
            echo "Build failed. Check the console output."
        }
    }
}
