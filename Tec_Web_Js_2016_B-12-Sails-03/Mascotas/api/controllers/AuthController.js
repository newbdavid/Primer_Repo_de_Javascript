/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Passwords = require('machinepack-passwords');
module.exports = {
	// Validar si envian parametros
    //Buscar por correo al usuario
    //Comparar el password
    //Entregar credencial
    
    login: function(req,res){
        var parametros = req.allParams();
        if(parametros.correo && parametros.password){
            //seguimos  
            Usuario.findOne({
                correo:parametros.correo
            }).exec(function(errorInesperado,UsuarioEncontrado){
                if(errorInesperado){
                    return res.view('vistas/Error', {
            error: {
                desripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
                rawError: "Ruta equivocada",
                url: "/Login"
            }
        });
                }
                if(UsuarioEncontrado){
                    
                     Passwords.checkPassword({

passwordAttempt: parametros.password,

encryptedPassword: UsuarioEncontrado.password,

}).exec({

// An unexpected error occurred.
                        

error: function (err) {
 return res.view('vistas/Error', {
            error: {
                desripcion: "Ingrese su password correctamente",
                rawError: err,
                url: "/Login"
            }
        });
 

},

// Password attempt does not match already-encrypted version

incorrect: function () {

 

},

// OK.

success: function () {

    req.session.credencialSegura = UsuarioEncontrado ;
    return res.view("vistas/home");

},

}); 
                    
                    
                    
                }
            })
            
        }else{
             return res.view('vistas/Error', {
            error: {
                desripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
                rawError: "Ruta equivocada",
                url: "/Inicio"
            }
        });
        }
    },
   tieneSesion:function (req,res){
    if(req.session.credencialSegura){
        return res.ok("Si tiene la credencial segura")
    }else{
        return res.forbidden();
    }
   },
    logout: function(req, res){
        req.session.credencialSegura = undefined;
    }
    
};

