const controller = (aplicacao, data)=>{
    aplicacao.post('/create', (req, res) =>{
        const body = req.body
        db.tips.push(body.tips)
        res.json(body)
        console.log(body + " informação enviada ao banco.")
    })
    
        app.get('/dicas', (req, res) => {
        res.json({
            "dicas": dados.dicas[parseInt(Math.random() * dados.dicas.length)]
            console.log("informação recolhida")
        })
    })
}
        
export default controller
