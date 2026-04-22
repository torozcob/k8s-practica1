const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Kubernetes App</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #1e3c72, #2a5298);
      color: white;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card {
      background: rgba(255, 255, 255, 0.1);
      padding: 40px;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      backdrop-filter: blur(10px);
    }

    h1 {
      margin: 0;
      font-size: 2.5rem;
    }

    p {
      opacity: 0.9;
      font-size: 1.2rem;
    }

    .badge {
      margin-top: 15px;
      display: inline-block;
      padding: 8px 16px;
      background: #00c6ff;
      color: black;
      border-radius: 20px;
      font-weight: bold;
    }
  </style>
</head>

<body>
  <div class="card">
    <h1>🚀 Kubernetes App</h1>
    <p>Desplegada correctamente en tu cluster</p>
    <div class="badge">Ingress + Service + Pod ✔</div>
  </div>
</body>
</html>
  `);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});