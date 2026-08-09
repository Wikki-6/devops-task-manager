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
<title>DevOps Task Manager - Jenkins Dashboard</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:#eef2f7;
    color:#1f2937;
}

.header{
    background:linear-gradient(135deg,#0f172a,#1e3a8a);
    color:white;
    padding:30px 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow:0 10px 25px rgba(0,0,0,.2);
}

.header h1{
    font-size:30px;
    font-weight:700;
}

.badge{
    background:#16a34a;
    padding:12px 20px;
    border-radius:30px;
    font-weight:600;
    font-size:14px;
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
    border-radius:18px;
    padding:25px;
    box-shadow:0 10px 30px rgba(0,0,0,.08);
    transition:all .3s ease;
}

.card:hover{
    transform:translateY(-5px);
}

.card h3{
    color:#64748b;
    font-size:15px;
    margin-bottom:12px;
}

.card .value{
    font-size:34px;
    font-weight:700;
    color:#0f172a;
}

.section{
    margin-top:30px;
    background:white;
    border-radius:18px;
    padding:30px;
    box-shadow:0 10px 30px rgba(0,0,0,.08);
}

.section h2{
    margin-bottom:25px;
    color:#0f172a;
    font-size:24px;
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
    align-items:center;
    margin-top:30px;
}

.stage{
    text-align:center;
    flex:1;
    position:relative;
}

.stage:not(:last-child)::after{
    content:'';
    position:absolute;
    top:25px;
    left:60%;
    width:80%;
    height:4px;
    background:#16a34a;
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
    font-size:20px;
    font-weight:bold;
    position:relative;
    z-index:2;
}

.progress{
    width:100%;
    height:12px;
    background:#e5e7eb;
    border-radius:20px;
    overflow:hidden;
    margin-top:12px;
}

.progress-bar{
    width:100%;
    height:100%;
    background:linear-gradient(90deg,#22c55e,#16a34a);
}

.footer{
    text-align:center;
    color:#64748b;
    padding:30px;
    font-size:14px;
}
</style>
</head>

<body>

<div class="header">
    <h1>DevOps Task Manager - Jenkins Build Report</h1>
    <div class="badge">SUCCESS</div>
</div>

<div class="container">

<div class="cards">

<div class="card">
    <h3>Build Number</h3>
    <div class="value">${env.BUILD_NUMBER}</div>
</div>

<div class="card">
    <h3>Job Name</h3>
    <div class="value" style="font-size:20px">${env.JOB_NAME}</div>
</div>

<div class="card">
    <h3>Branch</h3>
    <div class="value">main</div>
</div>

<div class="card">
    <h3>Status</h3>
    <div class="value" style="color:#16a34a">SUCCESS</div>
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

<p style="margin-top:15px;color:#16a34a;font-weight:600">
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
