pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Wikki-6/devops-task-manager.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-task-manager .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker rm -f devops-container || true'
                sh 'docker run -d -p 8083:80 --name devops-container devops-task-manager'
            }
        }
    }
}
