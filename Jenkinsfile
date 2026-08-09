stage('Generate HTML Report') {
    steps {
        sh '''
        mkdir -p reports

        cat > reports/index.html <<'EOF'
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
    background:#f4f7fb;
    color:#333;
}

.header{
    background:#0f172a;
    color:white;
    padding:25px 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.header h1{
    font-size:28px;
}

.status{
    background:#16a34a;
    padding:10px 20px;
    border-radius:25px;
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
    border-radius:15px;
    padding:25px;
    box-shadow:0 8px 25px rgba(0,0,0,0.08);
}

.card h3{
    color:#64748b;
    font-size:16px;
    margin-bottom:10px;
}

.card .value{
    font-size:32px;
    font-weight:bold;
    color:#0f172a;
}

.section{
    margin-top:30px;
    background:white;
    border-radius:15px;
    padding:25px;
    box-shadow:0 8px 25px rgba(0,0,0,0.08);
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
    padding:15px;
    border-bottom:1px solid #e5e7eb;
}

table td:first-child{
    color:#64748b;
    font-weight:600;
    width:35%;
}

.timeline{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:25px;
}

.stage{
    text-align:center;
    flex:1;
    position:relative;
}

.circle{
    width:45px;
    height:45px;
    background:#16a34a;
    border-radius:50%;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 auto 10px;
    font-weight:bold;
}

.stage:not(:last-child)::after{
    content:"";
    position:absolute;
    top:22px;
    left:60%;
    width:80%;
    height:4px;
    background:#16a34a;
}

.progress{
    width:100%;
    height:12px;
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
    padding:30px;
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
            <div class="value">BUILD_NUMBER</div>
        </div>

        <div class="card">
            <h3>Docker Image</h3>
            <div class="value" style="font-size:20px;">devops-task-manager:BUILD_NUMBER</div>
        </div>

        <div class="card">
            <h3>Application Port</h3>
            <div class="value">8083</div>
        </div>

        <div class="card">
            <h3>Pipeline Status</h3>
            <div class="value" style="color:#16a34a;">SUCCESS</div>
        </div>

    </div>

    <div class="section">
        <h2>Build Information</h2>

        <table>
            <tr>
                <td>Job Name</td>
                <td>devops-task-manager</td>
            </tr>

            <tr>
                <td>Build URL</td>
                <td>BUILD_URL</td>
            </tr>

            <tr>
                <td>Docker Image</td>
                <td>devops-task-manager:BUILD_NUMBER</td>
            </tr>

            <tr>
                <td>Container Name</td>
                <td>devops-container</td>
            </tr>

            <tr>
                <td>Application Port</td>
                <td>8083</td>
            </tr>

            <tr>
                <td>Pipeline Status</td>
                <td style="color:#16a34a;font-weight:bold;">SUCCESS</td>
            </tr>

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
                Build
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

        <p style="margin-top:10px;color:#16a34a;font-weight:bold;">100% Successful Build Execution</p>
    </div>

</div>

<div class="footer">
Generated automatically by Jenkins Pipeline | DevOps CI/CD Report
</div>

</body>
</html>
EOF

        sed -i "s|BUILD_NUMBER|$BUILD_NUMBER|g" reports/index.html
        sed -i "s|BUILD_URL|$BUILD_URL|g" reports/index.html
        '''
    }
}
