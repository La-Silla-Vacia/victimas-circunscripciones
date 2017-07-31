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
          <img src="https://c1.staticflickr.com/5/4304/36226500955_60dd73b194_b.jpg" alt=""
               className="background-img"/>

          <div onClick={this.handonclic.bind(this, "Cátedras, maestrías y capacitación a exconbatientes, la apuesta del posconflcito en clave Caribe", "<p>Desde hace varios años un puñado de universidades en el Caribe se viene pensando el posconflcito en clave regional. Ellas han reconocido la importancia de aterrizar los acuerdos a las realidades que vive el territorio y lo han hecho desde la academia y la participación activa en los procesos de reincorporación.</p><p>Desde ofrecer cursos de maestría en construcción de paz, como la Universidad de Cartagena, hasta liderar proyectos de articulación regional para trabajar en los territorios, como lo hace la Universidad del Norte en Barranquilla, estas universidades buscan contribuir al discurso público en torno a la paz, el cual suele dejar por fuera al Caribe por considerar erróneamente que aquí no se vivió tan fuerte la guerra.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61900' target='_blank' >VER MAS...</a></div>")} className="personaje uno">
            <div className="punto color1"><span>Caribe</span></div>
          </div>


          <div onClick={this.handonclic.bind(this, "La estrategia de las universidades públicas para crecer en medio del posconflicto", "<p>En los santanderes, las universidades públicas proyectan ampliar su cobertura en los territorios que eran dominados por las Farc. Así, no solo se fortalecen regionalmente, también ponen su grano de arena para la implementación de los acuerdos de La Habana. Mientras consiguen la plata con las administraciones departamentales y el Gobierno Nacional para concretarlo, sus movimientos estudiantiles están llegando hasta las zonas veredales a dictar talleres para los miembros de las Farc, con lo que le apuestan a la reconciliación.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61905' target='_blank' >VER MAS...</a></div>")} className="personaje dos">
            <div className="punto color1"><span>Santanderes</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Las universidades bogotanas se ponen las botas del posconflicto", "<p>En Bogotá, las universidades no se están limitando sólo a estudiar el conflicto desde las aulas, sino que tienen una serie de inciativas para intervenir en los territorios. Con esto, piensan sanar las heridas del conflicto, lograr que los diferentes sectores de la población se integren y garantizar que el conflicto no se vuelva a repetir.  Del lado de las privadas, los Andes, por ejemplo, creó la maestría en Construcción de Paz y este año becaron a un ex combatiente de las Farc, una víctima y a un miembro de las Fuerzas Armadas; el Rosario construyó un plan de 30 años para acompañar el posconflicto con investigaciones  y acompañamientos a comunidades; y la Javeriana asesora a  varias organizaciones nacionales e internacionales en temas de paz. Del lado de las públicas, la Nacional creó, desde que empezaron los diálogos en La Habana, un Centro de Pensamiento con el objetivo acompañar el proceso y la implementación de los Acuerdos con investigaciones y hace poco hicieron el censo socioeconómico de las Farc. La Distrital, por su lado, está enfocada en el diseño de varias estrategias de pedagogía como el diseño de un modelo educativo para los ex combatientes de las Farc y un museo itinerante de dibujos de niños con el objetivo de crear una memoria histórica del conflicto a partir de sus recuerdos y sentimientos.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61906' target='_blank' >VER MAS...</a></div>")} className="personaje tres">
            <div className="punto color1"><span>Bogotá</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Las universidades públicas se meten de lleno en el posconflicto", "<p>En el sur del país la Surcolombiana de Neiva, Huila y la Universidad de la Amazonía en Florencia, Caquetá, han llevado a grupos de estudiantes a las zonas veredales para que hablen con los exguerrilleros, van a reformar sus carreras para incluir cátedras, seminarios y talleres sobre construcción de paz y quieren que algunos de sus profesores les enseñen a planear a los miembros de las Farc los proyectos productivos para los que se supone, cada uno recibirá ocho millones de pesos.</p><p>La Surcolombiana va a becar a los responsables políticos de las zonas veredales del sur Ramiro Durán (de la zona veredal de la Carmelita en Putumayo), Federico Montes (de la zona veredal de la Montañita en Caquetá) y Daneiro Santamaria (de Miravalle, la zona de San Vicente del Caguán) para que hagan una maestría en Conflicto, Territorio y Cultura, un posgrado que lleva diez años y ha graduado a ocho promociones.</p><p>La Uniamazonía creó a principios de este año la Oficina de Paz en la que trabajan de manera directa diez profesores de diferentes áreas a los que se les liberó de las clases para que se dedicaran de lleno a pensar estrategias de intervención. Una de ellas, por ejemplo, es el 'Correo de la reconciliación', que consiste en que entre exguerrilleros y estudiantes de la universidad se han intercambiado cartas.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61696' target='_blank' >VER MAS...</a></div>")} className="personaje cua">
            <div className="punto color1"><span>Sur</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "En el Pacífico, las universidades hacen desde atención a las víctimas hasta diplomados para ex guerrilleros", "<p>Las universidades públicas y privadas de los departamentos de Valle, Cauca y Nariño se están pensando el posconflicto desde hace rato. La pionera ha sido la Universidad Javeriana de Cali, a través del Centro de Estudios Interculturales que dirige Manuel Ramiro Muñoz, ganador del premio a los Mejores Líderes de Colombia en 2016, y que desde hace años viene pensando estrategias para entender y promover el diálogo entre comunidades indígenas, afros, campesinos, empresarios y ahora ex combatientes de las Farc y militares para ayudar a desarticular conflictos sociales en el suroccidente.</p><p>El Instituto no sólo ha trabajado en crear puentes entre estos actores sino que ha hecho investigación y está ofreciendo diplomados de formación en liderazgo político y construcción de paz para todos ellos. No es la única. La Universidad del Valle, en Cali y la Universidad del Cauca, están ofreciendo diplomados similares para ex guerrilleros de las zonas veredales y todas, incluida la Universidad Icesi, están implementando la Catedra de Paz para sus propios estudiantes. Además, la Universidad de Nariño desarrolló un piloto con víctimas del conflicto para ayudarlas a superar los traumas que tienen por la guerra. </p>" +
      "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61904' target='_blank' >VER MAS...</a></div>")} className="personaje cin">
            <div className="punto color1"><span>Pacífico</span></div>
          </div>
        </div>
      </div>
    )
  }
}
