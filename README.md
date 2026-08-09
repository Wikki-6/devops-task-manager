# DevOps task manager CI/CD pipeline

## Project overview

This project demonstrates a complete CI/CD pipeline using Jenkins, Docker, GitHub, and webhooks. Every code push to the GitHub repository automatically triggers a Jenkins pipeline that validates the application, builds a versioned Docker image, and deploys the latest container.

## Technologies used

* Jenkins
* Docker
* GitHub
* GitHub Webhooks
* HTML
* CSS
* JavaScript

## CI/CD workflow

GitHub push -> GitHub webhook -> Jenkins pipeline -> Docker image build -> Docker container deployment

## Jenkins pipeline stages

### Checkout

Jenkins pulls the latest code from the GitHub repository.

### Test

A basic validation step verifies that the application files are present.

### Build Docker image

A Docker image is created using the Jenkins build number as the image tag.

Example:

docker build -t devops-task-manager:17 .

### Deploy container

The previous container is removed and the latest versioned image is deployed.

### Cleanup

Unused Docker images are removed using Docker image pruning.

## Docker image versioning

Each Jenkins build generates a uniquely tagged Docker image.

Example:

devops-task-manager:15

devops-task-manager:16

devops-task-manager:17

This enables traceability between Jenkins builds and deployed Docker images.

## Automatic deployment

GitHub webhooks are configured so that every commit to the main branch automatically triggers Jenkins.

Deployment requires no manual intervention.

## Application

The application is accessible at:

http://localhost:8083

## Interview highlights

This project demonstrates:

* Continuous Integration
* Continuous Deployment
* Jenkins Pipeline as Code
* Docker containerization
* GitHub webhook automation
* Image versioning
* Automated deployment

## Author
Webhook test - Jenkins trigger
Vignesh
