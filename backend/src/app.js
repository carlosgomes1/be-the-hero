const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())

app.use(express.json())
app.use(routes)
app.use(errors())

// Rota / Recurso

/* 

    METODOS HTTP
    GET: BUSCAR/LISTAR INFORMAÇÃO DO BACKEND
    POST: CRIAR UMA INFORMAÇÃO NO BACKEND
    PUT: ALTERAR INFORMAÇÃO NO BACKEND
    DELETE: DELETAR INFORMAÇÃO NO BACKEND

*/

/*

    TIPOS DE PARAMETROS:
    QUERY: parâmetros nomeados enviados na rota após o símbolo de ? (filtros, paginação)
    ROUTE: parâmetros utilizados para identificar recursos (unico (/:id))
    REQUEST BODY: corpo da requisição, utilizado para criar ou alterar recursos

*/

/*

    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB

    instal:
    driver: SELECT * from Users
    query builder: table('users').select('*').where()

*/



module.exports = app