module.exports=function(app){ //modulariza separadamente uma req
    app.get('/',function(req,res){
        res.render('home/index.ejs'); //renderiza a tela de resposta
    });
}