/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//para acceder a este metodo /Usuario/crearUsuario
module.exports = {
    crearUsuario: function (req, res) {
        //Guardando todos los parametros en la variable parametros

        var parametros = req.allParams()

        console.log(parametros);

        if (req.method == 'POST') {

            if (parametros.nombres && parametros.apellidos) {
                //creo el usuario
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (err, usuarioCreado) {
                    if (err) return res.serverError();
                    sails.log.info(usuarioCreado);
                    return res.ok(usuarioCreado); //200 status
                    //sails.log es el logger del sails
                });
            } else {
                //mandamos un bad request

                return res.badRequest('No envia todos los parametros')
            }
        } else {
            return res.badRequest('Metodo invalido')    
        }

        //vamos a mandar por medio de post usando esta URL
        //Usuario/crearUsuario?nombres=Adrian&apellidos=Eguez
        //se llaman query parameters

        //postMessage

        //correo:adrian.eguez@

    }
    
    
};