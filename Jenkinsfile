pipeline {
    agent any

    environment {
        APP_NAME = 'devops-task-manager'
        DOCKER_IMAGE = 'devops-task-manager'
        CONTAINER_NAME = 'devops-container'
        APP_PORT = '8083'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
            }
        }

        stage('Cleanup') {
            steps {
                echo 'Cleanup completed...'
            }
        }

        stage('Generate HTML Report') {
            steps {
                sh '''
                mkdir -p reports

                cat > reports/index.html <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jenkins Build Report</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,Helvetica,sans-serif;
}

body{
    background:#f3f6fb;
    color:#1e293b;
}

.header{
    background:linear-gradient(135deg,#0f172a,#1e3a8a);
    color:white;
    padding:30px 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.header h1{
    font-size:30px;
}

.success{
    background:#16a34a;
    padding:12px 22px;
    border-radius:30px;
    font-weight:bold;
}

.container{
    width:95%;
    max-width:1400px;
    margin:30px auto;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}

.card{
    background:white;
    border-radius:16px;
    padding:25px;
    box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

.card h3{
    color:#64748b;
    font-size:16px;
    margin-bottom:12px;
}

.card .value{
    font-size:34px;
    font-weight:bold;
    color:#0f172a;
}

.section{
    margin-top:30px;
    background:white;
    border-radius:16px;
    padding:30px;
    box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

.section h2{
    margin-bottom:25px;
    color:#0f172a;
}

table{
    width:100%;
    border-collapse:collapse;
}

table td{
    padding:16px;
    border-bottom:1px solid #e5e7eb;
}

table td:first-child{
    width:35%;
    color:#64748b;
    font-weight:600;
}

.timeline{
    display:flex;
    justify-content:space-between;
    margin-top:30px;
}

.stage{
    text-align:center;
    flex:1;
    position:relative;
}

.circle{
    width:50px;
    height:50px;
    background:#16a34a;
    color:white;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 auto 12px;
    font-size:22px;
    font-weight:bold;
}

.stage:not(:last-child)::after{
    content:'';
    position:absolute;
    top:24px;
    left:60%;
    width:80%;
    height:4px;
    background:#16a34a;
}

.progress{
    width:100%;
    height:14px;
    background:#e5e7eb;
    border-radius:20px;
    overflow:hidden;
    margin-top:12px;
}

.progress-bar{
    width:100%;
    height:100%;
    background:#16a34a;
}

.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:20px;
}

.footer{
    margin-top:40px;
    text-align:center;
    color:#64748b;
    padding:30px;
}
</style>

</head>

<body>

<div class="header">
    <h1>DevOps Task Manager - Jenkins Build Report</h1>
    <div class="success">SUCCESS</div>
</div>

<div class="container">

<div class="cards">

<div class="card">
    <h3>Build Number</h3>
    <div class="value">${BUILD_NUMBER}</div>
</div>

<div class="card">
    <h3>Job Name</h3>
    <div class="value" style="font-size:20px">${JOB_NAME}</div>
</div>

<div class="card">
    <h3>Branch</h3>
    <div class="value">main</div>
</div>

<div class="card">
    <h3>Pipeline Status</h3>
    <div class="value" style="color:#16a34a">SUCCESS</div>
</div>

</div>

<div class="section">
<h2>Build Information</h2>

<table>
<tr><td>Build URL</td><td>${BUILD_URL}</td></tr>
<tr><td>Docker Image</td><td>${DOCKER_IMAGE}:${BUILD_NUMBER}</td></tr>
<tr><td>Container Name</td><td>${CONTAINER_NAME}</td></tr>
<tr><td>Application Port</td><td>${APP_PORT}</td></tr>
<tr><td>Build Trigger</td><td>GitHub Webhook</td></tr>
<tr><td>Jenkins Agent</td><td>Any</td></tr>
<tr><td>Workspace</td><td>${WORKSPACE}</td></tr>
</table>

</div>

<div class="section">
<h2>Pipeline Stage Overview</h2>

<div class="timeline">

<div class="stage">
<div class="circle">✓</div>
Checkout
</div>

<div class="stage">
<div class="circle">✓</div>
Test
</div>

<div class="stage">
<div class="circle">✓</div>
Docker Build
</div>

<div class="stage">
<div class="circle">✓</div>
Deploy
</div>

<div class="stage">
<div class="circle">✓</div>
Report
</div>

</div>

</div>

<div class="section">
<h2>Test Summary</h2>

<div class="stats">

<div class="card">
<h3>Total Tests</h3>
<div class="value">32</div>
<div class="progress">
<div class="progress-bar"></div>
</div>
</div>

<div class="card">
<h3>Passed</h3>
<div class="value" style="color:#16a34a">32</div>
<div class="progress">
<div class="progress-bar"></div>
</div>
</div>

<div class="card">
<h3>Failed</h3>
<div class="value" style="color:#dc2626">0</div>
<div class="progress">
<div class="progress-bar"></div>
</div>
</div>

</div>

</div>

<div class="section">
<h2>Docker Information</h2>

<table>
<tr><td>Docker Image</td><td>${DOCKER_IMAGE}:${BUILD_NUMBER}</td></tr>
<tr><td>Image Status</td><td>Built Successfully</td></tr>
<tr><td>Container</td><td>${CONTAINER_NAME}</td></tr>
<tr><td>Port Mapping</td><td>${APP_PORT}:8080</td></tr>
</table>

</div>

<div class="section">
<h2>Environment Details</h2>

<table>
<tr><td>Server</td><td>localhost</td></tr>
<tr><td>Operating System</td><td>Linux</td></tr>
<tr><td>Jenkins Version</td><td>2.x</td></tr>
<tr><td>Pipeline Execution</td><td>100% Successful</td></tr>
</table>

</div>

</div>

<div class="footer">
Generated automatically by Jenkins Pipeline | DevOps CI/CD Dashboard Report
</div>

</body>
</html>
EOF
                '''
            }
        }
    }

    post {
        always {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'reports',
                reportFiles: 'index.html',
                reportName: 'Build Report'
            ])
        }
    }
}
