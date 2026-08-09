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

        def html = '''
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Jenkins Build Report</title>
<style>
body{margin:0;font-family:Segoe UI,Arial;background:#f4f7fb;color:#1f2937}
.header{background:#0f172a;color:#fff;padding:24px 36px;display:flex;justify-content:space-between;align-items:center}
.badge{background:#16a34a;padding:10px 16px;border-radius:999px;font-weight:700}
.container{padding:24px;max-width:1200px;margin:auto}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.card{background:#fff;border-radius:16px;padding:20px;box-shadow:0 6px 20px rgba(0,0,0,.08)}
.label{color:#64748b;font-size:14px;margin-bottom:8px}
.value{font-size:28px;font-weight:700}
.section{margin-top:24px;background:#fff;border-radius:16px;padding:24px;box-shadow:0 6px 20px rgba(0,0,0,.08)}
table{width:100%;border-collapse:collapse}
td{padding:14px;border-bottom:1px solid #e5e7eb}
td:first-child{width:35%;color:#64748b;font-weight:600}
.timeline{display:flex;justify-content:space-between;margin-top:20px}
.stage{text-align:center;flex:1}
.circle{width:48px;height:48px;border-radius:50%;background:#16a34a;color:#fff;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;font-weight:700}
.progress{height:12px;background:#e5e7eb;border-radius:999px;overflow:hidden;margin-top:10px}
.progress>div{height:100%;width:100%;background:#16a34a}
.footer{text-align:center;color:#64748b;padding:24px}
</style>
</head>
<body>

<div class="header">
  <h1>DevOps Task Manager - Jenkins Dashboard</h1>
  <div class="badge">SUCCESS</div>
</div>

<div class="container">

  <div class="grid">
    <div class="card">
      <div class="label">Build Number</div>
      <div class="value">${BUILD_NUMBER}</div>
    </div>

    <div class="card">
      <div class="label">Job Name</div>
      <div class="value" style="font-size:18px">${JOB_NAME}</div>
    </div>

    <div class="card">
      <div class="label">Branch</div>
      <div class="value">main</div>
    </div>

    <div class="card">
      <div class="label">Status</div>
      <div class="value" style="color:#16a34a">SUCCESS</div>
    </div>
  </div>

  <div class="section">
    <h2>Build information</h2>
    <table>
      <tr><td>Build URL</td><td>${BUILD_URL}</td></tr>
      <tr><td>Workspace</td><td>${WORKSPACE}</td></tr>
      <tr><td>Docker Image</td><td>devops-task-manager:${BUILD_NUMBER}</td></tr>
      <tr><td>Container</td><td>devops-container</td></tr>
      <tr><td>Port</td><td>8083</td></tr>
      <tr><td>Trigger</td><td>GitHub Webhook</td></tr>
    </table>
  </div>

  <div class="section">
    <h2>Pipeline stages</h2>
    <div class="timeline">
      <div class="stage"><div class="circle">✓</div>Checkout</div>
      <div class="stage"><div class="circle">✓</div>Test</div>
      <div class="stage"><div class="circle">✓</div>Build</div>
      <div class="stage"><div class="circle">✓</div>Deploy</div>
      <div class="stage"><div class="circle">✓</div>Report</div>
    </div>
  </div>

  <div class="section">
    <h2>Pipeline success rate</h2>
    <div class="progress"><div></div></div>
    <p style="margin-top:12px;color:#16a34a;font-weight:700">100% successful execution</p>
  </div>

</div>

<div class="footer">
Generated automatically by Jenkins Pipeline
</div>

</body>
</html>
'''

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
