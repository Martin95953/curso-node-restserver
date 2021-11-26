const {response,request} = require('express');


const usuariosGet = (req=request, res = response)=> {
    
    const {q, nombre = "no name", apikey } = req.query;
    res.json({
        msj: "get API-controlador" , 
        q,
        nombre,
        apikey
    }
        );
  }

  const usuariosPost = (req, res = response)=> {
    
    //obtener Json
    const msj = req.body;
    res.json(msj
        );
  }

  const usuariosPut = (req, res = response)=> {
    
    const id = req.params.id;
    res.json({
        msj: "put API-controlador" ,
        id
    }
        );
  }

  const usuariosPatch = (req, res = response)=> {
      
      res.json({
          msj: "patch API-controlador" 
      }
          );
    }
  const usuariosDelete = (req, res = response)=> {
    
    res.json({
        msj: "delete API-controlador" 
    }
        );
  }
  



  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    }