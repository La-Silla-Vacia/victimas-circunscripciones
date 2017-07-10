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

          <div onClick={this.handonclic.bind(this, "Título", "<p>Texto de Juan Pa Aquí</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://www.google.com' target='_blank' >VER MAS...</a></div>")} className="personaje tres">
            <div className="punto color1"><span>Zipaquirá</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Título", "<p>Texto de Natys Aquí</p>" )} className="personaje cua">
            <div className="punto color1"><span>Cali</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Álvaro León Zuluaga, el afectado en Medellín", "<p>En Antioquia la empresa dueña de las fotomultas es Quipux. Fue creada en 1995 en Rionegro y su representante legal es Álvaro León Zuluaga, un contratista que lleva desde la alcaldía de Luis Pérez en 2001 manejando todo el sistema de fotomultas en Medellín y luego, a raíz de un informe de auditoria de la Contraloría de Medellín que decía le pedía a la Secretaría de Movilidad fijar controles a la información que manejaban los empleados de Quipux y la que ellos ingresaban al sistema, el entonces alcalde Sergio Fajardo firmó un convenio interadministrativo con Emtelco, UNE, filial de las Empresas Públicas de Medellín, EPM, para que modernizara el sistema. Ese convenio fue por 6.023 millones a un plazo inicial de 8 años, y ya en el mismo 2006 se le añadieron 4 otrosíes que extendieron su plazo a 12 años.</p><p>En 2010  la alcaldía de Alonso Salazar hizo el otro sí 5 que le agregó una segunda etapa al convenio hasta 2025. El presupuesto para esa nueva etapa fue de 64.424 millones de pesos, adicionales a los 6.023 millones iniciales.</p><p>Para esa segunda etapa el gerente general de UNE suscribió un acuerdo de colaboración empresarial con XM y el Consorcio ITS Medellín, que está conformado por SITT & Cía ltda y Quipux. UNE también firmó otro contrato para el suministro de equipos, software, implantación y mantenimiento de los equipos tecnológicos del sistema de fotodetección con la sociedad Velsis, una empresa brasilera cuya sucursal en Medellín fue creada en 2011 justamente por Álvaro León Zuluaga, el representante legal de Quipux.</p><p>Para el módulo de fotomultas, Quipux tiene el 41 por ciento del recaudo, por lo que el proyecto de ley le pegaría directamente a Álvaro León Zuluaga. En todo caso, Quipux tiene un poder que trasciende a las fotomultas. De hecho, a la empresa la llaman 'el Gran Hermano' porque fuera de Antioquia, desde 2007 la empresa tiene el 49% de la concesión Runt S.A de todo el país (la otra mitad la tienen Heinsohn Software House S.A. e Información y Tecnología S.A) con el ministerio de Transporte.</p><p>La Concesión Runt S.A. diseñó un sistema para unificar la información de todos los carros del país, sus propietarios y sus infracciones. Para eso, Quipux hizo el sistema Qx-tránsito y entonces a las oficinas de tránsito de todo el país les tocó adquirir el software para interactuar en línea con la central de información nacional, lo que convirtió a la empresa en una súper poderosa en ese sector.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://www.google.com' target='_blank' >VER MAS...</a></div>")} className="personaje cin">
            <div className="punto color1"><span>Medellín</span></div>
          </div>
        </div>
      </div>
    )
  }
}
