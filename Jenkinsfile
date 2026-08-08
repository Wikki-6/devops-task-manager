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

        stage('Blue-Green Deploy') {
            steps {
                bat 'docker rm -f devops-container-new || exit 0'
                bat 'docker run -d -p 8084:80 --name devops-container-new devops-task-manager:%BUILD_NUMBER%'
                bat 'timeout /t 5'
                bat 'docker rm -f devops-container || exit 0'
                bat 'docker rename devops-container-new devops-container'
            }
        }

        stage('Cleanup') {
            steps {
                bat 'docker image prune -f'
            }
        }
    }

    post {
        success {
            echo 'Blue-Green deployment completed successfully.'
        }
        failure {
            echo 'Pipeline failed during deployment.'
        }
    }
}
