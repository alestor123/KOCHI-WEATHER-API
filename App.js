var express =  require('express'),
    app = express(),
    axios = require('axios');
    require('dotenv').config()
 var port = process.env.PORT || 3000,
key = process.env.KEY;
app.get('/', (req, res) => {
res.send('<h1>Hlo</h1>') 
});


app.listen(port, () => console.log(`server running at ${port}`))

