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
          <img src="https://c1.staticflickr.com/5/4347/35828842263_eae8c63406_b.jpg" alt=""
               className="background-img"/>

          <div onClick={this.handonclic.bind(this, "En el Caribe se barajan nombres con peso nacional", "<p>Entre el miedo y la esperanza, las organizaciones civiles y de víctimas de la región Caribe avanzan en la conformación de las listas y candidaturas que presentarán el próximo año para las circunscripciones especiales de paz. Para las cuatro curules que se abrieron en la Costa ya hay nombres de peso nacional entre sus aspirantes, como la lideresa de Montes de María, Soraya Bayuelo, el superpoderoso del campo <a href='http://lasillavacia.com/quienesquien/perfilquien/andres-gil-gutierrez' target='_blank'>Andrés Gil en el sur de Bolívar y el coordinador de la Mesa Nacional de Víctimas, Odorico Guerra por la circunscripción de Magdalena, Cesar y La Guajira.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/62096' target='_blank' >VER MAS...</a></div>")} className="personaje uno">
            <div className="punto color1"><span>Caribe</span></div>
          </div>


          <div onClick={this.handonclic.bind(this, "En el Oriente, las víctimas aún no se apropian de la circunscripción", "<p>Las asociaciones de víctimas en el Catatumbo y Arauca aun no han definido si van a participar o no con candidatos propios para la circunscripción. Aunque en ambas regiones tienen claro que deben sentar una posición al respecto, en ambos casos esperan hacerlo durante el próximo mes. Sin embargo, en ambas regiones ya hay otras organizaciones y políticos sonando con fuerza que podrían capitalizar votos entre la población víctima.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/62209' target='_blank' >VER MAS...</a></div>")} className="personaje dos">
            <div className="punto color1"><span>Oriente</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Antioquia, entre víctimas empoderadas e intereses políticos", "<p>Las circunscripciones especiales de los paisas son dos. La 16, que encierra Urabá, y la 3, que agrupa municipios del Norte, Nordeste y todo el Bajo Cauca. Son 21 municipios en total. Allá, las organizaciones de víctimas están hablando con las organizaciones campesinas y juntas de acción comunal para postular candidatos de consenso.</p><p>En Urabá la agrupación de víctimas 'Mi vida', es la más fuerte. Está compuesta por 119 organizaciones de los ocho municipios de la circunscripción y los líderes más sonados son Birleida Ballesteros, de la Mesa Departamental de Víctimas y Carlos Banguero, un abogado de Apartadó. Otro líder que nos mencionaron fuentes locales es Ciro Abadía, director de la Asociación de Víctimas de Apartadó (Asovima).</p><p>La amenaza que nos manifestaron algunos líderes de la región es que hay políticos cercanos a los partidos tradicionales que están cocinando una posible candidatura, información que no pudimos verificar con otras fuentes.</p><p>Así como en Urabá, en la circunscripción 3 hay una red de organizaciones sociales y de víctimas de toda la región que en cada uno de los 13 municipios tiene dos precandidatos, un hombre y una mujer, que van a reunirse el fin de semana del 1 de septiembre para escoger entre ellos un candidato y una candidata, según nos contó una fuente de la subregión.</p><p>La única víctima que está sonando como candidato en esa circunscripción es Servio Urzola, del municipio El Bagre, Bajo Cauca. Urzola sería el candidato de la Mesa departamental de Víctimas, ha hecho parte de la Mesa Ambiental de Antioquia y es líder de restitución de tierras en su municipio.</p><p>Mientras tanto, los mineros en esa circunscripción están fuertes. Doce asociaciones del Bajo Cauca, Norte y Nordeste quieren presentar como candidato a Mauricio Gómez, presidente de la Confederación Nacional de Mineros de Colombia.</p><p>Gómez nos contó que ha tenido acercamientos con comunidades indígenas embera de Tarazá y con la Asociación de Negritudes de Zaragoza para que lo apoyen. Esos grupos tienen en común, como él, considerarse víctimas de extorsiones y desplazamientos por parte de bandas criminales, paramilitares y guerrilla.</p><p>En las dos circunscripciones de Antioquia el reto de las víctimas es asegurar que esas dos curules son suyas.</p>")}
          className="personaje tres">
            <div className="punto color1"><span>Antioquia</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "En el sur, los líderes de víctimas ya están abonando terreno", "<p>En Putumayo, Caquetá y Huila ya suenan nombres con fuerza de líderes de víctimas que tienen trayectoria desde hace años en fundaciones de víctimas para llegar a la circunscripción y, según dos líderes de víctimas, hasta ahora no se han metido políticos a querer peliarles la curul. Aunque dicen que todavía están a la espera de que se termine de definir la reglamentación del proyecto en el Congreso, hay ya dos candidatos fuertes que solo están esperando el aval de las mesas departamentales de víctimas para postular su nombre: Derly Pastrana, de la mesa departamental de Víctimas del Huila y Juvenal Bazurto, director de una organización de víctimas de San Vicente del Caguán.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/62210' target='_blank' >VER MAS...</a></div>")} className="personaje cua">
            <div className="punto color1"><span>Sur</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "En el Pacífico no hay candidatos oficiales, pero ya suenan 2 nombres", "<p>Aunque por ahora se sabe muy poco de candidatos oficiales, en el Pacífico ya están sonando 2 nombres de víctimas para estas curules. Uno es el de Marino Córdoba, líder de Afrodes (Asociación Nacional de Afrocolombianos Desplazados) y que ha sido víctima de desplazamiento forzado; otro es el de Victor Hugo Mena, representante legal de Aconc (Asociación de Consejos Comunitarios del Norte del Cauca), un líder afro que pelea contra la minería legal e ilegal en su territorio. Sin confirmar con ellos y con solo una fuente, hay dos nombres más que suenan: Marino Quiñones, profesor miembro de la Mesa Departamental de Educación Afronariñense, por la circunscripción 10. Y Hector Marino Carabalí, un afro de Buenos Aires (Cauca) representante de la Asociación de Víctimas Renacer XXI que es amenazado por los paramilitares por sus denuncias contra la minería ilegal en el municipio. El reto para las candidaturas de la región son las Bacrim y el ELN, aún presentes en varias zonas del Pacifico y que se encuentran disputando los vacíos de poder que dejaron las Farc.</p>" +
      "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/62211' target='_blank' >VER MAS...</a></div>")} className="personaje cin">
            <div className="punto color1"><span>Pacífico</span></div>
          </div>
        </div>
      </div>
    )
  }
}
