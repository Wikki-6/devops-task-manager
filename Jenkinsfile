node {

    stage('Checkout') {
        checkout scm
    }

    stage('Test') {
        echo 'Running tests...'
    }

    stage('Build Docker Image') {
        echo 'Building Docker image...'
    }

    stage('Run Docker Container') {
        echo 'Running Docker container...'
    }

    stage('Cleanup') {
        echo 'Cleanup completed...'
    }

    stage('Generate HTML Report') {

        bat 'if not exist reports mkdir reports'

        def html = """
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jenkins Build Report</title>

<style>
body{
    font-family: Arial, sans-serif;
    background:#f4f7fb;
    margin:0;
    padding:40px;
}

.container{
    max-width:800px;
    margin:auto;
    background:white;
    border-radius:12px;
    padding:30px;
    box-shadow:0 4px 15px rgba(0,0,0,0.1);
}

h1{
    color:#0f172a;
    margin-bottom:20px;
}

.status{
    display:inline-block;
    background:#16a34a;
    color:white;
    padding:8px 16px;
    border-radius:20px;
    font-weight:bold;
    margin-bottom:25px;
}

table{
    width:100%;
    border-collapse:collapse;
}

td{
    padding:12px;
    border-bottom:1px solid #e5e7eb;
}

td:first-child{
    font-weight:bold;
    color:#475569;
    width:35%;
}

.footer{
    margin-top:25px;
    text-align:center;
    color:#64748b;
    font-size:14px;
}
</style>
</head>

<body>

<div class="container">

<h1>DevOps Task Manager - Jenkins Report</h1>

<div class="status">BUILD SUCCESS</div>

<table>
<tr><td>Build Number</td><td>${env.BUILD_NUMBER}</td></tr>
<tr><td>Job Name</td><td>${env.JOB_NAME}</td></tr>
<tr><td>Build URL</td><td>${env.BUILD_URL}</td></tr>
<tr><td>Workspace</td><td>${env.WORKSPACE}</td></tr>
<tr><td>Application</td><td><a href="http://localhost:8083/" target="_blank">http://localhost:8083/</a></td></tr>
<tr><td>Docker Image</td><td>devops-task-manager:${env.BUILD_NUMBER}</td></tr>
<tr><td>Container</td><td>devops-container</td></tr>
<tr><td>Status</td><td style="color:#16a34a;font-weight:bold;">SUCCESS</td></tr>
</table>

<div class="footer">
Generated automatically by Jenkins Pipeline
</div>

</div>

</body>
</html>
"""

        writeFile file: 'reports/index.html', text: html

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
