var express =  require('express'),
    app = express(),
    axios = require('axios');
    require('dotenv').config()
 var port = process.env.PORT || 3000,
key = process.env.KEY,
city = process.env.CITY,
url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
if(!process.env){
console.log('Please enter env')
process.exit(1)
}
app.get('/', (req, res) => {
axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response.data.weather);
    res.json({
        City:city,
        Weather:response.data.weather[0].main,
        Description:response.data.weather[0].description
    })
})
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
});

app.listen(port, () => console.log(`server running at ${port}`))

