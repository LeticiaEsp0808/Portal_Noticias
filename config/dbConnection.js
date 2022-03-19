const mysql=require('mysql'); //importa o MySQL
module.exports=function(){ //modularização da conexão com a database
    return mysql.createConnection({//chama o módulo mysql e cria uma conexão e preenche com os dados da conexão
        host:'localhost',
        user:'root',
        password:'ifms',
        database:'portal_noticias'
    });
};