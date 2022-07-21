const controller = (aplicacao, data)=>{
    aplicacao.post('/create', (req, res) =>{
        const body = req.body
        try {
            if(body.tip.length != 0){
                data.tips.push(body.tips)
                res.json({ 
                    msg: "Parabéns! sua dica foi inserida no banco de dados", 
                    error: false
                })
            }else{
                throw new Error("Verifique se os campos foram digitados corretamente")
            }
        } catch (error) {
            res.json({ 
                msg: error.message,
                error: true
            })
        }
        
        
    })
    aplicacao.get('/tips', (req, res)=>{
        res.json({
            })
    })
}

export default controller