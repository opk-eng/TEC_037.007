from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


alunos = [
    {"id": 1, "nome": "João", "idade": 20},
    {"id": 2, "nome": "Maria", "idade": 22},
    {"id": 3, "nome": "Pedro", "idade": 21},
]

# Rota para obter a lista de alunos
@app.route('/alunos', methods=['GET'])
def listar_alunos():
    return jsonify(alunos)

# Iniciar API 
app.run(port=3000,debug=True)