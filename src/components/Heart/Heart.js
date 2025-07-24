import React from 'react';
import './Heart.css';
import collage from '../../assets/collage.PNG';
import ProductSlider from "../ProductSlider";


const decoracionesImages = [
  {
    url: "http://localhost:8080/uploads/decoacc/atrapasueños.PNG",
    nombre: "ATRAPASUEÑOS",
    descripcion: "Decoración tejida en macrame, tamaño pequeño",
    stock: "Stock 1",
    precio: "$60.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/decoacc/bolero.PNG",
    nombre: "BOLERO FLORAL",
    descripcion: "Tejida a mano estilo flores",
    stock: "Stock 2",
    precio: "$95.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/decoacc/espejos.PNG",
    nombre: "ESPEJO MACRAME",
    descripcion: "Tejido en macrame mediano con espejo pequeño",
    stock: "Stock 2",
    precio: "$80.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/decoacc/materas.PNG",
    nombre: "FORRO MATERAS",
    descripcion: "Tejidas en macrame diferentes tamaños desde",
    stock: "Stock 2",
    precio: "$50.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/decoacc/prendas.PNG",
    nombre: "TOP EN CROCHET",
    descripcion: "Tejido en crochet",
    stock: "Stock 2",
    precio: "$70.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
   {
    url: "http://localhost:8080/uploads/decoacc/telar.PNG",
    nombre: "DECORACIÓN DE PARED",
    descripcion: "Tejido en macrame diferentes tamaños desde",
    stock: "Stock 2",
    precio: "$80.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  }

]
const masculinaImages = [
  {
    url: "http://localhost:8080/uploads/masculina/hercules.PNG",
    nombre: "HERCULES",
    descripcion: "Tejid en macrame con decoraciones en acero inoxidable",
    stock: "Stock 5",
    precio: "$50.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/masculina/olimpo.PNG",
    nombre: "Olimpo",
    descripcion: "Tejida a mano en hilo cuero",
    stock: "Stock 5",
    precio: "$80.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/pulseras/anubis.PNG",
    nombre: "Anubis",
    descripcion: "Tejida en hilo paracord con decoración en acero inoxidable",
    stock: "Stock 5",
    precio: "$65.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/masculina/poseidon.PNG",
    nombre: "Celeste",
    descripcion: "Tejida en paracord con decoración en acero inoxidable tamaño delgado",
    stock: "Stock 5",
    precio: "$60.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/masculina/zeus.PNG",
    nombre: "ZEUS",
    descripcion: "Tejido con decoración en acero inoxidable",
    stock: "Stock 5",
    precio: "$60.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },


];

const pulseraImages = [
  {
    url: "http://localhost:8080/uploads/pulseras/afrodita.PNG",
    nombre: "Afrodita",
    descripcion: "tejida a mano con hilo chino dos colores",
    stock: "Stock 5",
    precio: "$25.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/pulseras/andromedaa.PNG",
    nombre: "Andromeda",
    descripcion: "Tejida a mano en macrame y decoración de mostacilla checa",
    stock: "Stock 5",
    precio: "$35.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/pulseras/anubis.PNG",
    nombre: "Anubis",
    descripcion: "Tejida en hilo chino con decoración de perlas",
    stock: "Stock 5",
    precio: "$35.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/pulseras/celeste4.PNG",
    nombre: "Celeste",
    descripcion: "Pulsera dos colores de perlas y calibres diferentes, decoración en acero inoxidable",
    stock: "Stock 5",
    precio: "$45.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/pulseras/isis4.PNG",
    nombre: "Isis",
    descripcion: "Tejido en perlas y decoraciones en acero inoxidable",
    stock: "Stock 5",
    precio: "$60.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },


];
const aretesImages = [
  {
    url: "http://localhost:8080/uploads/aretes/afroditaa.PNG",
    nombre: "Afrodita",
    descripcion: "Aretes hechos a mano en alambre y perlas",
    stock: "Stock 5",
    precio: "$45.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/aretes/andromeda.PNG",
    nombre: "Andromeda",
    descripcion: "Elaborados a mano en murano y perlas",
    stock: "Stock 5",
    precio: "$35.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/aretes/isis3.PNG",
    nombre: "Isis",
    descripcion: "Tejido a mano en mostacilla chega",
    stock: "Stock 5",
    precio: "$35.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/aretes/persefone3.PNG",
    nombre: "Persefone",
    descripcion: "Tejido a mano en macrame y decoración",
    stock: "Stock 5",
    precio: "$45.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/aretes/nutt.PNG",
    nombre: "Nut",
    descripcion: "Tejido a mano con mostacilla checa bicolor",
    stock: "Stock 5",
    precio: "$35.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
   {
    url: "http://localhost:8080/uploads/aretes/karry.PNG",
    nombre: "Kaly",
    descripcion: "Tejido a mano con mostacilla checa e hilo",
    stock: "Stock 5",
    precio: "$35.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  }

];
const morralesImages = [
  {
    url: "http://localhost:8080/uploads/morrales/mistico.PNG",
    nombre: "MÍSTICO",
    descripcion: "Personalizado tejido a mano, pequeño",
    stock: "Stock 1",
    precio: "$150.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/morrales/wayuu.PNG",
    nombre: "MORRAL WAYU",
    descripcion: "Tejido a mano dos colores grisosos, mediano",
    stock: "Stock 1",
    precio: "$120.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/morrales/aurico.PNG",
    nombre: "AURICO",
    descripcion: "Tejido a mano en trapillo, pequeño",
    stock: "Stock 1",
    precio: "$95.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/morrales/crochet.PNG",
    nombre: "MORRAL EN CROCHET",
    descripcion: "Tejido a mano con decoración en piedra ",
    stock: "Stock 1",
    precio: "$120.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  },
  {
    url: "http://localhost:8080/uploads/morrales/nativo.PNG",
    nombre: "NATIVO",
    descripcion: "Tejido a mano estilo wayu con decoración tejida a mano, mediano",
    stock: "Stock 1",
    precio: "$150.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>
  }
];

const collaresImages = [
  {
    url: "http://localhost:8080/uploads/collares/afrodita.PNG",
    nombre: "AFRODITA",
    descripcion: "Elaborado a mano, con cadena dorada, piedras verdes y mostacillas doradas, dijes elaborados en alambre dorado",
    stock: "Stock 3",
    precio: "$55.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>,
    clase: "collar-image"
  },
  {
    url: "http://localhost:8080/uploads/collares/artemiza.PNG",
    nombre: "ARTEMISA",
    descripcion: "Elaborado en hilo coreano, decoración en perlas y lagrimas blancas",
    stock: "Stock 3",
    precio: "$30.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>,
    clase: "collar-image"
  },
   {
    url: "http://localhost:8080/uploads/collares/atenea.PNG",
    nombre: "ATENEA",
    descripcion: "Elaborado a mano con cuero, mostacilla blanca y decoración en acero inoxidable",
    stock: "Stock 3",
    precio: "$55.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>,
    clase: "collar-image"
  },
   {
    url: "http://localhost:8080/uploads/collares/celeste.PNG",
    nombre: "CELESTE",
    descripcion: "Elaborado a mano con encaje negro, cadena, lagrimas negras y decoración en forma óvalo",
    stock: "Stock ",
    precio: "$55.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>,
    clase: "collar-image"
  },
   {
    url: "http://localhost:8080/uploads/collares/hera.PNG",
    nombre: "HERA",
    descripcion: "Tejido con mostacillas, perlas y decoraciones con diferentes perlas y acero inoxidable",
    stock: "Stock 3",
    precio: "$30.000 SIN IVA",
    carrito: <a href="#" title="Carrito">🛒</a>,
    clase: "collar-image"
  }
];


const Heart = () => {
  return (
    <div>
      {/*Imagen + mensaje*/}
      <div className="heart-container d-flex align-items-center justify-content-center p-5">
        <div className="me-5">
          <img 
            src={collage} 
            alt="Productos" 
            style={{ width: '580px', height: 'auto', borderRadius: '10px' }} 
          />
        </div>

        <div className="heart-text text-end">
          <p>"Tu fuerza radica...</p>
          <p>En tu capacidad de</p>
          <p>Mantener</p>
          <p>La <strong>CABEZA</strong></p>
          <p>En alto ... incluso en</p>
          <p>los momentos más difíciles."</p>
        </div>
      </div>

      <h3 id="mochilas" className="section-title">BOLSOS Y MOCHILAS</h3>
<ProductSlider images={morralesImages} />

<h3 id="collares" className="section-title">BISUTERIA COLLARES</h3>
<ProductSlider images={collaresImages} />

<h3 id="aretes" className="section-title">ARETES</h3>
<ProductSlider images={aretesImages} />

<h3 id="pulseras" className="section-title">PULSERAS</h3>
<ProductSlider images={pulseraImages} />
<h3 id="pulseras_masculinas" className="section-title">PULSERAS MASCULINAS</h3>
<ProductSlider images={masculinaImages} />

<h3 id="decoraciones" className="section-title">DECORACIONES Y MÁS</h3>
<ProductSlider images={decoracionesImages} />
<br/>
<button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  ↑ VOLVER
</button>

    </div>
  );
};

export default Heart;

