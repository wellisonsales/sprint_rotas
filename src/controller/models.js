const controller = (app)=>{
    aplicacao.get('/create', (req,rest) =>{
        rest.send('uma frase bem boba e gostosa')
    })
    aplicacao.post('/tips', (req, rest) =>{
        rest.send('segunda frase super legal hein uau')
    })
    
}

export default controller