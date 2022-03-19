module.exports=function(app){ //serve para modularizar/ organizar o projeto
    app.get('/formularioinclusaonoticia',(req,res)=>{
        res.render('admin/form_add_noticia.ejs'); //renderiza a tela de resposta para a requisição
    });
}