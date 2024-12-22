const express = require('express');

//Criando o ambiente do express
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

var utilitarioRouter = require('./routes/utilitarioRouter');
app.use('/', utilitarioRouter);

var carroRouter = require('./routes/carroRouter');
app.use('/', carroRouter);

var esportivoRouter = require('./routes/esportivoRouter');
app.use('/', esportivoRouter);

var clienteRouter = require('./routes/clienteRouter');
app.use('/', clienteRouter);

var funcionarioRouter = require('./routes/funcionarioRouter');
app.use('/', funcionarioRouter);

var promocaoRouter = require('./routes/promocaoRouter');
app.use('/', promocaoRouter);

var reservaRouter = require('./routes/reservaRouter');
app.use('/', reservaRouter);

const db = require('./configs/database')

const port = 5000;
const host = '0.0.0.0'

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao banco de dados com sucesso');
    app.listen(port, host, () => {
        console.log(`Servidor executando na porta ${port}`);
    })
}).catch(err => {
    console.error(`Erro ao conectar ao banco de dados: ${err.message}`, err);
    process.exit(1);
})