const controller = (aplicacao, data)=>{
    aplicacao.post('/create', (req, res) =>{
        const body = req.body
        data.tips.push(body.tips)
        res.json(body)
        console.log(body + " informação enviada ao banco.")
    })
    
        aplicacao.get('/tips', (req, res) => {
        res.json({
            "tips": data.tips[parseInt(Math.random() * data.tips.length)]
            console.log("informação recolhida")
        })
    })
}
        
export default controller
