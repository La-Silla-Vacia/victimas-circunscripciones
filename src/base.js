import {h, render, Component} from 'preact';

import s from './base.css';
const data = require('../data/data.json');

export default class Base extends Component {
  constructor() {
    super();

    this.state = {
      popup: false
    }
  }

  handonclic(title, content) {
    this.setState({popup: {title, content}});
  }

  closePopup() {
    this.setState({popup: false});
  }

  getPopup() {
    if (!this.state.popup) return;
    return (
      <div className={s.popup}>
        <button className={s.salir} onClick={this.closePopup.bind(this)}>Cerrar</button>
        <h2>{this.state.popup.title}</h2>
        <div dangerouslySetInnerHTML={{__html: this.state.popup.content}}/>
      </div>
    )
  }

  render(props, state) {
    const popup = this.getPopup();
    let fondo;
    if (state.popup) {
      fondo = (<div className={s.fondo}/>);
    }
    return (
      <div className={s.container}>
        {fondo}
        {popup}

        <div className="cont_circulos">
          <img src="http://archivo.lasillavacia.com/archivos/historias/Galeria/fotomultas.jpg" alt=""
               className="background-img"/>

          <div onClick={this.handonclic.bind(this, "Los hemanos Daes, megacontratistas de Barranquilla y dueños de Tecnoglass", "<p>En enero de 2010, durante su primera administración como alcalde de Barranquilla, Alejandro Char firmó un otrosí al contrato de concesión de amoblamiento urbano que desde 1999 maneja la empresa Construseñales SA, de los hermanos Christian y José Manuel ‘Yuyo’ Daes Abuchaibe, superpoderosos de Barranquilla y dueños de la empresa Tecnoglass. Con ese otrosí, el Distrito le entregó a un privado el 35% del total del recaudo de las fotomultas. Desde entonces, la Alcaldía instala cámaras por toda la ciudad, que hoy suman 56, para registrar infracciones por exceso de velocidad, irrespeto a las cebras y semáforos, bloqueo de intersecciones o incumplimiento a la medida de 'pico y placa'.</p><p>Entre 2010 y febrero de este año, la Secretaría de Tránsito impuso 744 mil comparendos electrónicos por 187 mil millones de pesos. Sin embargo, solo recaudó 30.663 millones de pesos porque los 157.202 millones restantes están en cobros coactivos, según respuesta de esa dependencia a un derecho de petición. Desde su instalación, las cámaras han generado polémica en Barranquilla porque, pese a que la Alcaldía las presentó como aliadas en su campaña para reducir la accidentalidad vial, son consideradas elementos de generación de recursos que no siempre se instalan con criterios técnicos.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/historia/los-super-poderosos-de-las-fotomultas-en-el-caribe-que-no-saldran-golpeados-61475' target='_blank' >VER MAS...</a></div>")} className="personaje uno">
            <div className="punto color1"><span>Barranquilla</span></div>
          </div>


          <div onClick={this.handonclic.bind(this, "Contratistas y poderosos locales", "<p>En los últimos cinco años en los santanderes se han entregado cuatro concesiones -Floridablanca en Santander y Ocaña, Los Patios y Villa del Rosario en Norte de Santander-  para la operación de las fotomulas. Tres han quedado en manos de contratistas conocidos por financiar campañas y una dentro de la red de negocios del emporio del controvertido empresario barranquillero, Alfonso 'el Turco' Hilsaca.</p><p>En los santenderes el concesionario que menos gana con el recaudo de las infracciones es el de Floridablanca que se queda con el 45,3%, el que más gana es el de Hilsaca que está en Villa del Rosario -municipio del área metropolitana de Cúcuta- y se queda con el 80%. Todas las concesiones tienen en común que resultaron de la sociedad de varias empresas y que están en la mira de entes de control por la manera en la que fueron licitados. Su operación ha sido igual de controvertida y en Los Patios, otro de los municipios del área metropolitana de Cúcuta, en solo ocho meses de operación se han emitido 60 mil órdenes de comparendos.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://www.google.com' target='_blank' >VER MAS...</a></div>")} className="personaje dos">
            <div className="punto color1"><span>Santanderes</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Título", "<p>Texto texto texto texto texto de Juan Pa</p>")} className="personaje tres">
            <div className="punto color1"><span>Zipaquirá</span></div>
          </div>

          <div className="personaje cua">
            <div className="punto color1"><span>Cali</span></div>
          </div>

          <div className="personaje cin">
            <div className="punto color1"><span>Medellín</span></div>
          </div>
        </div>
      </div>
    )
  }
}
