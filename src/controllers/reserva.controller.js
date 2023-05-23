const reservas = require('../../data/reservas.json')

const getAllreservas = (req, res)=>{
    res.json( reservas ).status(200)

    
}

function getReservaByid(req, res) {
    
    const id = req.params.id;
    const resultado = alumnos.find(reserva => reserva.id == id);
    const mostrar= console.log("resultado")
    if (resultado) {
        res.status(200).json(resultado).status(200);
    } else {
        res.status(404).json({ mensaje: `La reserva con id ${id} no fue encontrada` });
        
    }

}

const deleteReservaByid = (req, res) => {
    const id = req.params.id
    const indice = reservas.findIndex( id => reserva.id == id )
    if(indice==-1) {
        res.status(404).
        json(
            {
            resultado: "La operación de borrado no pudo ser realizada",
            mensaje: `La reserva con id ${id} no fue encontrada`
            }
        )
    } else {
        const reserva = reservas[indice];
        const resultado = alumnos.splice(indice,1)
        res.status(200)
        .json(
            {resultado: "La operación de borrado pudo realizarse con exito",
                  reserva:reserva            }
        )
    }
}


module.exports = { 
    getAllreservas,
    getReservaByid,
     deleteReservaByid,
     }