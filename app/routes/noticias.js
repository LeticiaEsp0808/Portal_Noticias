const dbConnection = require('../../config/dbConnection'); //importa o dbconnection
module.exports=function(app){ //faz a modulação da conexão com o server
    var connection=dbConnection();
    app.get('/noticia',function(req,res){
        connection.query('select * from noticias', function(error, result){ // error tras os erros e result os resultados
            if (error){
                console.log(error);
            };
            res.render('noticias/noticia.ejs',{noticias:result});
            //renderização da tela noticia.ejs passando a variável result

        }); 

    });
}