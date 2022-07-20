const controller = (app, data)=>{
    app.post('/create', (req, res) =>{
        const body = req.body