pipeline {
    agent any

    stages {
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
