const app=require('./config/server.js'); 
const rotaHome=require('./app/routes/home.js')(app); //configura as rotas e conecta com o app.js
const rotaAdmin=require('./app/routes/admin.js')(app);
const rotaNoticias=require('./app/routes/noticias.js')(app);

app.listen('3000',function(){//Cria um servidor rodando na porta 3000
	console.log('Servidor rodando na porta 3000');
});