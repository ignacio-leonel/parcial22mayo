const express= require("express")
const PORT = process.env.PORT || 3000
const app = express()
const vehiculosRouter= require('./routes/vehiculos.route') 
const reservasRouter= require('./routes/reserva.route')

app.use(express.json())
app.use('./routes/reserva.route.js', reservaRouter.router )
app.use('./routes/vehiculos.route.js', vehiculosRouter.router )


app.listen (PORT,()=>{console.log("arranco en el puerto ${PORT}")})
