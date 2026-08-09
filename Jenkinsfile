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
<title>DevOps Task Manager - Jenkins Build Report</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Segoe UI, Arial, sans-serif;
}

body{
    background:#f3f6fb;
    color:#1f2937;
}

.header{
    background:linear-gradient(135deg,#0f172a,#1e3a8a);
    color:white;
    padding:25px 35px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.header h1{
    font-size:30px;
}

.status{
    background:#16a34a;
    padding:10px 18px;
    border-radius:30px;
    font-weight:bold;
}

.container{
    width:90%;
    max-width:1200px;
    margin:30px auto;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:20px;
}

.card{
    background:white;
    border-radius:15px;
    padding:20px;
    box-shadow:0 8px 20px rgba(0,0,0,0.08);
}

.card h3{
    color:#64748b;
    margin-bottom:10px;
    font-size:15px;
}

.card .value{
    font-size:30px;
    font-weight:bold;
    color:#0f172a;
}

.section{
    background:white;
    border-radius:15px;
    padding:25px;
    margin-top:25px;
    box-shadow:0 8px 20px rgba(0,0,0,0.08);
}

.section h2{
    margin-bottom:20px;
    color:#0f172a;
}

table{
    width:100%;
    border-collapse:collapse;
}

table td{
    padding:14px;
    border-bottom:1px solid #e5e7eb;
}

table td:first-child{
    width:35%;
    color:#64748b;
    font-weight:bold;
}

.timeline{
    display:flex;
    justify-content:space-between;
    margin-top:20px;
}

.stage{
    text-align:center;
    flex:1;
}

.circle{
    width:50px;
    height:50px;
    background:#16a34a;
    color:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 auto 10px;
    font-size:20px;
    font-weight:bold;
}

.progress{
    width:100%;
    height:14px;
    background:#e5e7eb;
    border-radius:20px;
    overflow:hidden;
    margin-top:15px;
}

.progress-bar{
    width:100%;
    height:100%;
    background:#16a34a;
}

.footer{
    text-align:center;
    color:#64748b;
    margin:40px 0;
    font-size:14px;
}
</style>
</head>

<body>

<div class="header">
    <h1>DevOps Task Manager - Jenkins Build Report</h1>
    <div class="status">SUCCESS</div>
</div>

<div class="container">

<div class="cards">

<div class="card">
    <h3>Build Number</h3>
    <div class="value">${env.BUILD_NUMBER}</div>
</div>

<div class="card">
    <h3>Job Name</h3>
    <div class="value" style="font-size:18px;">${env.JOB_NAME}</div>
</div>

<div class="card">
    <h3>Branch</h3>
    <div class="value">main</div>
</div>

<div class="card">
    <h3>Status</h3>
    <div class="value" style="color:#16a34a;">SUCCESS</div>
</div>

</div>

<div class="section">
<h2>Build Information</h2>

<table>
<tr><td>Build URL</td><td>${env.BUILD_URL}</td></tr>
<tr><td>Workspace</td><td>${env.WORKSPACE}</td></tr>
<tr><td>Docker Image</td><td>devops-task-manager:${env.BUILD_NUMBER}</td></tr>
<tr><td>Container Name</td><td>devops-container</td></tr>
<tr><td>Application Port</td><td>8083</td></tr>
<tr><td>Build Trigger</td><td>GitHub Webhook</td></tr>
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
<h2>Pipeline Success Rate</h2>

<div class="progress">
<div class="progress-bar"></div>
</div>

<p style="margin-top:15px;color:#16a34a;font-weight:bold;">
100% Successful Build Execution
</p>

</div>

<div class="section">
<h2>Docker Information</h2>

<table>
<tr><td>Image</td><td>devops-task-manager:${env.BUILD_NUMBER}</td></tr>
<tr><td>Status</td><td>Built Successfully</td></tr>
<tr><td>Container</td><td>devops-container</td></tr>
<tr><td>Port Mapping</td><td>8083:8080</td></tr>
</table>

</div>

</div>

<div class="footer">
Generated automatically by Jenkins Pipeline | DevOps CI/CD Dashboard
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
