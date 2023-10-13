
import React, { useEffect } from 'react';
import {Row,Container,Col,Card,Button } from 'react-bootstrap';
import './itemListContainer.css'
import { useState } from  'react'
import { getFetch } from '../helpers/getFetch';







function ItemListContainer({greeting,titulo}){
    const[productos,setProductos]=useState([])
    useEffect(()=>{
        getFetch //funcion que simula una api
       
        .then(resp=>setProductos(resp))
        .catch(err=>console.log(err))
        .finally(()=>console.log('siempre al ultimo'))
      
    }, [])
    console.log(productos)
    return(
        
        <Container>
  <Row>
  <Col>
    <div>
            
            {greeting}
            {productos.map((producto)=>   <div key={producto.id} className='col-md-10'>
                <div className="card w-100 mt-5">
                    <div className="card-header">
                        <p>{`${producto.name} `}</p>
                    </div>
                    <div className="card-body">
                        <img src={producto.foto} alt='hola' className='w-100'/>
                        
                    </div>
                    <p>Genero:{producto.categoria}</p>
                    <p>  ${producto.price} </p>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary btn-block">
                            <p>Detalle de Producto</p> 
                        </button>
                    </div>
                    
                 </div>
            </div>
            )}

        </div> 
        </Col>

        <Col>
    <div>
            
            {greeting}
            {productos.map((producto)=>   <div key={producto.id} className='col-md-10'>
                <div className="card w-100 mt-5">
                    <div className="card-header">
                        <p>{`${producto.name} `}</p>
                    </div>
                    <div className="card-body">
                        <img src={producto.foto} alt='hola' className='w-100'/>
                        
                    </div>
                    <p>Genero:{producto.categoria}</p>
                    <p>  ${producto.price} </p>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary btn-block">
                            <p>Detalle de Producto</p> 
                        </button>
                    </div>
                    
                 </div>
            </div>
            )}

        </div> 
        </Col>
    
  </Row>
  </Container>
        
    )
}
export default ItemListContainer

