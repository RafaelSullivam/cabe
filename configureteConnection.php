<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}

class ConfigureteConnection
{
    private $host;
    private $database;
    private $username;
    private $password;
    private $pdo;

    public function __construct()
    {
        $this->host = 'mysql.geocontrole.com:33008';
        $this->database = 'geo';
        $this->username = 'sTERseAdapHA';
        $this->password = '0"@<(Q/C\0Cg[P8M';
        $this->pdo = null;
    }

    public function connect()
    {
        try {
            $dsn = "mysql:host={$this->host};dbname={$this->database}";
            $this->pdo = new PDO($dsn, $this->username, $this->password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo json_encode(['message' => 'Database connection successful']);
        } catch (PDOException $e) {
            error_log('Error connecting to the database: ' . $e->getMessage());
            header("HTTP/1.1 500 Internal Server Error");
            // echo json_encode(['error' => 'Database connection failed']);
            die();
        }
    }

    public function getConnection()
    {
        return $this->pdo;
    }
}

// Código removido para evitar execução automática que interfere com headers
// Se precisar testar a conexão, chame explicitamente os métodos da classe