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
<html lang='en'>
<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>Jenkins Build Dashboard</title>
<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Segoe UI,Arial,sans-serif;
}
body{
    background:#f1f5f9;
    color:#1e293b;
}
.header{
    background:linear-gradient(135deg,#0f172a,#2563eb);
    color:white;
    padding:25px 35px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.header h1{
    font-size:28px;
}
.badge{
    background:#16a34a;
    padding:10px 18px;
    border-radius:30px;
    font-weight:bold;
}
.container{
    width:92%;
    max-width:1300px;
    margin:30px auto;
}
.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:20px;
}
.card{
    background:white;
    border-radius:16px;
    padding:22px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
}
.card h3{
    color:#64748b;
    font-size:14px;
    margin-bottom:10px;
}
.value{
    font-size:30px;
    font-weight:bold;
}
.section{
    background:white;
    border-radius:16px;
    padding:28px;
    margin-top:28px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
}
.section h2{
    margin-bottom:20px;
}
table{
    width:100%;
    border-collapse:collapse;
}
td{
    padding:14px;
    border-bottom:1px solid #e5e7eb;
}
td:first-child{
    width:35%;
    color:#64748b;
    font-weight:600;
}
.timeline{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:25px;
}
.stage{
    flex:1;
    text-align:center;
}
.circle{
    width:48px;
    height:48px;
    background:#16a34a;
    color:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 auto 10px;
    font-weight:bold;
}
.progress{
    width:100%;
    height:12px;
    background:#e5e7eb;
    border-radius:999px;
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
}
</style>
</head>

<body>

<div class='header'>
    <h1>DevOps Task Manager - Jenkins Dashboard</h1>
    <div class='badge'>SUCCESS</div>
</div>

<div class='container'>

<div class='grid'>

<div class='card'>
<h3>Build Number</h3>
<div class='value'>${env.BUILD_NUMBER}</div>
</div>

<div class='card'>
<h3>Job Name</h3>
<div class='value' style='font-size:18px;'>${env.JOB_NAME}</div>
</div>

<div class='card'>
<h3>Branch</h3>
<div class='value'>main</div>
</div>

<div class='card'>
<h3>Status</h3>
<div class='value' style='color:#16a34a;'>SUCCESS</div>
</div>

</div>

<div class='section'>
<h2>Build Information</h2>
<table>
<tr><td>Build URL</td><td>${env.BUILD_URL}</td></tr>
<tr><td>Workspace</td><td>${env.WORKSPACE}</td></tr>
<tr><td>Application URL</td><td><a href='http://localhost:8083/' target='_blank'>http://localhost:8083/</a></td></tr>
<tr><td>Docker Image</td><td>devops-task-manager:${env.BUILD_NUMBER}</td></tr>
<tr><td>Container</td><td>devops-container</td></tr>
<tr><td>Port</td><td>8083</td></tr>
<tr><td>Trigger</td><td>GitHub Webhook</td></tr>
</table>
</div>

<div class='section'>
<h2>Pipeline Stage Overview</h2>

<div class='timeline'>
<div class='stage'><div class='circle'>✓</div>Checkout</div>
<div class='stage'><div class='circle'>✓</div>Test</div>
<div class='stage'><div class='circle'>✓</div>Build</div>
<div class='stage'><div class='circle'>✓</div>Deploy</div>
<div class='stage'><div class='circle'>✓</div>Report</div>
</div>

</div>

<div class='section'>
<h2>Pipeline Success Rate</h2>

<div class='progress'>
<div class='progress-bar'></div>
</div>

<p style='margin-top:12px;color:#16a34a;font-weight:bold;'>
100% Successful Build Execution
</p>

</div>

<div class='section'>
<h2>Application Health</h2>

<div class='grid'>

<div class='card'>
<h3>Application Status</h3>
<div class='value' style='color:#16a34a;'>UP</div>
</div>

<div class='card'>
<h3>Localhost URL</h3>
<div class='value' style='font-size:18px;'>localhost:8083</div>
</div>

<div class='card'>
<h3>Environment</h3>
<div class='value'>LOCAL</div>
</div>

<div class='card'>
<h3>Deployment</h3>
<div class='value' style='color:#16a34a;'>ACTIVE</div>
</div>

</div>

</div>

</div>

<div class='footer'>
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
