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
                bat 'docker build -t devops-task-manager:%BUILD_NUMBER% .'
            }
        }

        stage('Deploy Container') {
            steps {
                bat 'docker rm -f devops-container || exit 0'
                bat 'docker run -d -p 8083:80 --name devops-container devops-task-manager:%BUILD_NUMBER%'
            }
        }

        stage('Cleanup Old Images') {
            steps {
                bat 'for /f %i in (''docker images devops-task-manager --format "{{.Repository}}:{{.Tag}}"'') do @echo %i'
                bat 'docker image prune -f'
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully.'
        }
        failure {
            echo 'CI/CD pipeline failed.'
        }
    }
}
