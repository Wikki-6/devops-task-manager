pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Wikki-6/devops-task-manager.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t devops-task-manager .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker rm -f devops-container || exit 0'
                bat 'docker run -d -p 8083:80 --name devops-container devops-task-manager'
            }
        }
    }
}
