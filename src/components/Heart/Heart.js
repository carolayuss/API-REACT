import React from 'react';
import './Heart.css';
import ProductSlider from "./ProductSlider";


const decoracionesImages = [
  {
    url: "http://localhost:8080/uploads/decoacc/d1.PNG",
    nombre: "ATRAPASUEÑOS",
    descripcion: "Decoración tejida en macrame, tamaño pequeño",
    precio: "$60.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/decoacc/d2.PNG",
    nombre: "BOLERO FLORAL",
    descripcion: "Tejida a mano estilo flores",
    precio: "$95.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/decoacc/d3.PNG",
    nombre: "ESPEJO MACRAME",
    descripcion: "Tejido en macrame mediano con espejo pequeño",
    precio: "$80.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/decoacc/d4.PNG",
    nombre: "FORRO MATERAS",
    descripcion: "Tejidas en macrame diferentes tamaños desde",
    precio: "$50.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/decoacc/d5.PNG",
    nombre: "TOP EN CROCHET",
    descripcion: "Tejido en crochet",
    precio: "$70.000 SIN IVA",
  },

   {
    url: "http://localhost:8080/uploads/decoacc/d6.PNG",
    nombre: "DECORACIÓN DE PARED",
    descripcion: "Tejido en macrame diferentes tamaños desde",
    precio: "$80.000 SIN IVA",
  }

]
const masculinaImages = [
  {
    url: "http://localhost:8080/uploads/masculina/pm1.PNG",
    nombre: "HERCULES",
    descripcion: "Tejid en macrame con decoraciones en acero inoxidable",
    precio: "$50.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/masculina/pm2.PNG",
    nombre: "OLIMPO",
    descripcion: "Tejida a mano en hilo cuero",
    precio: "$80.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/masculina/pm3.PNG",
    nombre: "POSEIDON",
    descripcion: "Tejida en hilo paracord con decoración en acero inoxidable",
    precio: "$65.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/masculina/pm4.PNG",
    nombre: "PERSEO",
    descripcion: "Tejida en paracord con decoración en acero inoxidable tamaño delgado",
    precio: "$60.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/masculina/pm5.PNG",
    nombre: "ZEUS",
    descripcion: "Tejido con decoración en acero inoxidable",
    precio: "$60.000 SIN IVA",
  },

 {
    url: "http://localhost:8080/uploads/masculina/pm6.PNG",
    nombre: "APOLO",
    descripcion: "Tejido con decoración en acero inoxidable",
    precio: "$60.000 SIN IVA",
  },

   {
    url: "http://localhost:8080/uploads/masculina/pm7.PNG",
    nombre: "HEFESTO",
    descripcion: "Tejido con decoración en acero inoxidable",
    precio: "$60.000 SIN IVA",
  },

];

const pulseraImages = [
  {
    url: "http://localhost:8080/uploads/pulseras/p1.PNG",
    nombre: "Afrodita",
    descripcion: "tejida a mano con hilo chino dos colores",
    precio: "$25.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/pulseras/p2.PNG",
    nombre: "Anubis",
    descripcion: "Tejida a mano en macrame y decoración de mostacilla checa",
    precio: "$35.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/pulseras/p3.PNG",
    nombre: "Andromeda",
    descripcion: "Tejida en hilo chino con decoración de perlas",
    precio: "$35.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/pulseras/p4.PNG",
    nombre: "Celeste",
    descripcion: "Pulsera dos colores de perlas y calibres diferentes, decoración en acero inoxidable",
    precio: "$45.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/pulseras/p5.PNG",
    nombre: "Isis",
    descripcion: "Tejido en perlas y decoraciones en acero inoxidable",
    precio: "$60.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/pulseras/p6.PNG",
    nombre: "Doncell",
    descripcion: "Tejido en perlas y decoraciones en acero inoxidable",
    precio: "$60.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/pulseras/p7.PNG",
    nombre: "Atena",
    descripcion: "Tejido en perlas y decoraciones en acero inoxidable",
    precio: "$60.000 SIN IVA",
  },


];
const aretesImages = [
  {
    url: "http://localhost:8080/uploads/aretes/A1.PNG",
    nombre: "Afrodita",
    descripcion: "Aretes hechos a mano en alambre y perlas",
    precio: "$45.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/aretes/A2.PNG",
    nombre: "Andromeda",
    descripcion: "Elaborados a mano en murano y perlas",
    precio: "$35.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/aretes/A3.PNG",
    nombre: "Isis",
    descripcion: "Tejido a mano en mostacilla chega",
    precio: "$35.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/aretes/A4.PNG",
    nombre: "Persefone",
    descripcion: "Tejido a mano en macrame y decoración",
    precio: "$45.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/aretes/A5.PNG",
    nombre: "Nut",
    descripcion: "Tejido a mano con mostacilla checa bicolor",
    precio: "$35.000 SIN IVA",
  },

   {
    url: "http://localhost:8080/uploads/aretes/A6.PNG",
    nombre: "Kaly",
    descripcion: "Tejido a mano con mostacilla checa e hilo",
    precio: "$35.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/aretes/A7.PNG",
    nombre: "Kaly",
    descripcion: "Tejido a mano con mostacilla checa e hilo",
    precio: "$35.000 SIN IVA",

  }

];
const morralesImages = [
  {
    url: "http://localhost:8080/uploads/morrales/m1.PNG",
    nombre: "MÍSTICO",
    descripcion: "Personalizado tejido a mano, pequeño",
    precio: "$150.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/morrales/m2.PNG",
    nombre: "MORRAL WAYU",
    descripcion: "Tejido a mano dos colores grisosos, mediano",
    precio: "$120.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/morrales/m3.PNG",
    nombre: "AURICO",
    descripcion: "Tejido a mano en trapillo, pequeño",
    precio: "$95.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/morrales/m4.PNG",
    nombre: "MORRAL EN CROCHET",
    descripcion: "Tejido a mano con decoración en piedra ",
    precio: "$120.000 SIN IVA",
  },

  {
    url: "http://localhost:8080/uploads/morrales/m5.PNG",
    nombre: "NATIVO",
    descripcion: "Tejido a mano estilo wayu con decoración tejida a mano, mediano",
    precio: "$150.000 SIN IVA",
  },

   {
    url: "http://localhost:8080/uploads/morrales/m6.PNG",
    nombre: "NATIVO",
    descripcion: "Tejido a mano estilo wayu con decoración tejida a mano, mediano",
    precio: "$150.000 SIN IVA",
    },

   {
    url: "http://localhost:8080/uploads/morrales/m7.PNG",
    nombre: "NATIVO",
    descripcion: "Tejido a mano estilo wayu con decoración tejida a mano, mediano",
    precio: "$150.000 SIN IVA",    
  }
];

const collaresImages = [
  {
    url: "http://localhost:8080/uploads/collares/c1.PNG",
    nombre: "AFRODITA",
    descripcion: "Elaborado a mano, con cadena dorada, piedras verdes y mostacillas doradas, dijes elaborados en alambre dorado",
    stock: "Stock 3",
    precio: "$55.000 SIN IVA",
    },

  {
    url: "http://localhost:8080/uploads/collares/c2.PNG",
    nombre: "ARTEMISA",
    descripcion: "Elaborado en hilo coreano, decoración en perlas y lagrimas blancas",
    stock: "Stock 3",
    precio: "$30.000 SIN IVA",
    },

   {
    url: "http://localhost:8080/uploads/collares/c3.PNG",
    nombre: "ATENEA",
    descripcion: "Elaborado a mano con cuero, mostacilla blanca y decoración en acero inoxidable",
    stock: "Stock 3",
    precio: "$55.000 SIN IVA",
   },

   {
    url: "http://localhost:8080/uploads/collares/c4.PNG",
    nombre: "CELESTE",
    descripcion: "Elaborado a mano con encaje negro, cadena, lagrimas negras y decoración en forma óvalo",
    precio: "$55.000 SIN IVA",
    },

   {
    url: "http://localhost:8080/uploads/collares/c5.PNG",
    nombre: "HERA",
    descripcion: "Tejido con mostacillas, perlas y decoraciones con diferentes perlas y acero inoxidable",
    precio: "$30.000 SIN IVA",
  },
  {
    url: "http://localhost:8080/uploads/collares/c6.PNG",
    nombre: "YUSS",
    descripcion: "Tejido con mostacillas, perlas y decoraciones con diferentes perlas y acero inoxidable",
    precio: "$30.000 SIN IVA",
   
    
  },
   {
    url: "http://localhost:8080/uploads/collares/c7.PNG",
    nombre: "YUSS",
    descripcion: "Tejido con mostacillas, perlas y decoraciones con diferentes perlas y acero inoxidable",
    precio: "$30.000 SIN IVA",
    
  },
  

];

const bienvenidaImages = [
  { url: "http://localhost:8080/uploads/varios/Collage_Aretes.PNG",
    descripcion: "ARETES",
  },
 { url: "http://localhost:8080/uploads/varios/Collage_Collares.PNG",
    descripcion: "COLLARES",
  },
  { url: "http://localhost:8080/uploads/varios/Collage_Pulsera.PNG",
    descripcion: "PULSERA",
  },
  { url: "http://localhost:8080/uploads/varios/Collage_Morrales.PNG",
    descripcion: "MORRALES",
  },
  { url: "http://localhost:8080/uploads/varios/Collage_Decoracion.PNG",
    descripcion: "DECORACIÓN",
  },
  
];

const Heart = ({ onAddToCart }) => {
  return (
    <div>
    <h3 id="varios" className="section-title">Bisuteria Artesanal y Decoraciones</h3>
<ProductSlider images={bienvenidaImages} onAddToCart={onAddToCart} />

      <h3 id="morrales" className="section-title">BOLSOS Y MOCHILAS</h3>
<ProductSlider images={morralesImages} onAddToCart={onAddToCart} />

<h3 id="collares" className="section-title">BISUTERIA COLLARES</h3>
<ProductSlider images={collaresImages} onAddToCart={onAddToCart} />

<h3 id="aretes" className="section-title">ARETES</h3>
<ProductSlider images={aretesImages} onAddToCart={onAddToCart} />

<h3 id="pulseras" className="section-title">PULSERAS</h3>
<ProductSlider images={pulseraImages} onAddToCart={onAddToCart} />

<h3 id="pulsera masculina" className="section-title">PULSERAS MASCULINAS</h3>
<ProductSlider images={masculinaImages} onAddToCart={onAddToCart} />

<h3 id="decoración" className="section-title">DECORACIONES Y MÁS</h3>
<ProductSlider images={decoracionesImages} onAddToCart={onAddToCart} />
<br/>
<button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  ↑ VOLVER
</button>

    </div>
  );
};

export default Heart;

