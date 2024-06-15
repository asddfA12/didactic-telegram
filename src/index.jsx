import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Promo from './Promocion';
import Categorias from './Categoria';
import Principal from './Principal.jsx';
import Pagina2 from './Pagina2';
import Cartilla from './Cartilla';
import Example from './Menu';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
     <Principal imagen="whatsapp logo.jpg" imagen2="logo pedidos.jpg" imagen3="logo maps.jpg" />
     <Example />
     <Cartilla titulo1="Ibuprofeno" subtitulo="De 600mg Bs.0.17" medi="ibuprofeno.jpg" descripcion="Con el 20% de descuento desde 5 unidades para arriba" />
     <Cartilla titulo1="Protector Solar Isdin" subtitulo="De 150ml Bs.199.78" medi="isdin.jpg" descripcion="Con el 7% de descuento hasta agotar stock" />
     <Cartilla titulo1="Balsamo Ivis Rocher" subtitulo="De 5.2g Bs.14.56" medi="balsamo.jpg" descripcion="Sabor Frambuesa y Frutos Rojos" />
     <Cartilla titulo1="Huggies talla G" subtitulo="100 un. Bs.135.76" medi="hggies.jpg" descripcion="Caja de 100 unidades talla G" />
     <Cartilla titulo1="Garnier Fructis Hair" subtitulo="100 un. Bs.115.76" medi="shampoo.jpg" descripcion="Garnier Fructis Hair Food Shampoo Sandia X 300Ml" />
     <Cartilla titulo1="Paracetamol" subtitulo="De 500mg Bs.0.19" medi="paracetamol.jpg" descripcion="Con 20% de descuento desde 5 unidades para arriba" />
     <Cartilla titulo1="Gomitas multivitaminas" subtitulo="De 50u Bs.47.19" medi="vitaminas.jpg" descripcion="Gomitas multivitaminas y mineral Provic" />
     <Cartilla titulo1="Enjuague bucal Colgate" subtitulo="De 500ml Bs.47.29" medi="enjuague.jpg" descripcion="LLevas 3 pagas 2" />
     <Pagina2  nombrepromo="Problemas?" descripcion="Buscas más ofertas?" parrafo="Recuerda que tu carrito solo acepta hasta 20 productos" />
     <Pagina2 nombrepromo="Ofertas" descripcion="Problemas con tu carrito" parrafo="No olvides que pagando con tu tarjeta Mercantil Santa Cruz obtienes un 10% de descuento en toda tu compra" />
     <Promo />

     <Categorias lista="Maria Jose Ramirez" numero="12346754"/>
     <Categorias lista="Miriam Herrar Quispe" numero="9845622"/>
     <Categorias lista="Jose Luis Vega" numero="4563900"/>
     <Categorias lista="Mercedes Choque Aruquipa" numero="4578812"/>
     <Categorias lista="Pedro Mamamni Quispe" numero="8755434"/>
     <Categorias lista="Nadia Herrera Espinoza" numero="10237765"/>
     <Categorias lista="Ignacio Marquez Mancilla" numero="12234876"/>
     <Categorias lista="Saraith Quispe Velasquez" numero="7866435"/>
     <Categorias lista="Ariana Salvado Lopez" numero="8777654"/>
     <Categorias lista="Estrella Romero Villca" numero="5854323"/>
     
     
   
    

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
