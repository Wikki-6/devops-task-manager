stage('Generate HTML Report') {
    steps {
        bat '''
        if not exist reports mkdir reports

        (
        echo ^<!DOCTYPE html^>
        echo ^<html lang="en"^>
        echo ^<head^>
        echo ^<meta charset="UTF-8"^>
        echo ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>
        echo ^<title^>Jenkins Build Report^</title^>
        echo ^<style^>
        echo body{font-family:Arial,sans-serif;background:#f4f7fb;margin:0;padding:0;}
        echo .header{background:#0f172a;color:#fff;padding:25px 40px;display:flex;justify-content:space-between;align-items:center;}
        echo .status{background:#16a34a;padding:10px 20px;border-radius:25px;font-weight:bold;}
        echo .container{width:95%%;max-width:1400px;margin:30px auto;}
        echo .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;}
        echo .card{background:#fff;border-radius:15px;padding:25px;box-shadow:0 8px 25px rgba(0,0,0,.08);}
        echo .card h3{color:#64748b;margin-bottom:10px;}
        echo .card .value{font-size:30px;font-weight:bold;color:#0f172a;}
        echo .section{margin-top:30px;background:#fff;border-radius:15px;padding:25px;box-shadow:0 8px 25px rgba(0,0,0,.08);}
        echo table{width:100%%;border-collapse:collapse;}
        echo td{padding:15px;border-bottom:1px solid #e5e7eb;}
        echo td:first-child{width:35%%;font-weight:bold;color:#64748b;}
        echo .timeline{display:flex;justify-content:space-between;margin-top:25px;}
        echo .stage{text-align:center;flex:1;}
        echo .circle{width:45px;height:45px;background:#16a34a;color:#fff;border-radius:50%%;display:flex;justify-content:center;align-items:center;margin:0 auto 10px;font-weight:bold;}
        echo .progress{width:100%%;height:12px;background:#e5e7eb;border-radius:20px;overflow:hidden;margin-top:10px;}
        echo .progress-bar{width:100%%;height:100%%;background:#16a34a;}
        echo .footer{text-align:center;color:#64748b;padding:30px;}
        echo ^</style^>
        echo ^</head^>
        echo ^<body^>

        echo ^<div class="header"^>
        echo ^<h1^>DevOps Task Manager - Jenkins Build Report^</h1^>
        echo ^<div class="status"^>SUCCESS^</div^>
        echo ^</div^>

        echo ^<div class="container"^>

        echo ^<div class="cards"^>

        echo ^<div class="card"^>
        echo ^<h3^>Build Number^</h3^>
        echo ^<div class="value"^>%BUILD_NUMBER%^</div^>
        echo ^</div^>

        echo ^<div class="card"^>
        echo ^<h3^>Job Name^</h3^>
        echo ^<div class="value" style="font-size:20px;"^>%JOB_NAME%^</div^>
        echo ^</div^>

        echo ^<div class="card"^>
        echo ^<h3^>Docker Image^</h3^>
        echo ^<div class="value" style="font-size:20px;"^>devops-task-manager:%BUILD_NUMBER%^</div^>
        echo ^</div^>

        echo ^<div class="card"^>
        echo ^<h3^>Pipeline Status^</h3^>
        echo ^<div class="value" style="color:#16a34a;"^>SUCCESS^</div^>
        echo ^</div^>

        echo ^</div^>

        echo ^<div class="section"^>
        echo ^<h2^>Build Information^</h2^>
        echo ^<table^>
        echo ^<tr^>^<td^>Build URL^</td^>^<td^>%BUILD_URL%^</td^>^</tr^>
        echo ^<tr^>^<td^>Docker Image^</td^>^<td^>devops-task-manager:%BUILD_NUMBER%^</td^>^</tr^>
        echo ^<tr^>^<td^>Container Name^</td^>^<td^>devops-container^</td^>^</tr^>
        echo ^<tr^>^<td^>Application Port^</td^>^<td^>8083^</td^>^</tr^>
        echo ^<tr^>^<td^>Workspace^</td^>^<td^>%WORKSPACE%^</td^>^</tr^>
        echo ^</table^>
        echo ^</div^>

        echo ^<div class="section"^>
        echo ^<h2^>Pipeline Stage Overview^</h2^>
        echo ^<div class="timeline"^>
        echo ^<div class="stage"^>^<div class="circle"^>✓^</div^>Checkout^</div^>
        echo ^<div class="stage"^>^<div class="circle"^>✓^</div^>Test^</div^>
        echo ^<div class="stage"^>^<div class="circle"^>✓^</div^>Docker Build^</div^>
        echo ^<div class="stage"^>^<div class="circle"^>✓^</div^>Deploy^</div^>
        echo ^<div class="stage"^>^<div class="circle"^>✓^</div^>Report^</div^>
        echo ^</div^>
        echo ^</div^>

        echo ^<div class="section"^>
        echo ^<h2^>Pipeline Success Rate^</h2^>
        echo ^<div class="progress"^>^<div class="progress-bar"^>^</div^>^</div^>
        echo ^<p style="margin-top:10px;color:#16a34a;font-weight:bold;"^>100%% Successful Build Execution^</p^>
        echo ^</div^>

        echo ^</div^>

        echo ^<div class="footer"^>
        echo Generated automatically by Jenkins Pipeline ^| DevOps CI/CD Dashboard Report
        echo ^</div^>

        echo ^</body^>
        echo ^</html^>
        ) > reports\\index.html
        '''
    }
}
