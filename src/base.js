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


          <div onClick={this.handonclic.bind(this, "La apuesta de las universidades públicas por fortalecerse en regiones de conflicto", "<p>En los santanderes, las universidades públicas proyectan ampliar su cobertura en los territorios que eran dominados por las Farc. Así, no solo se fortalecen regionalmente, también ponen su grano de arena para la implementación de los acuerdos de La Habana. Los proyectos van desde llegar a esas regiones con la modalidad a distancia, hasta construir una ciudadela universitaria en el Catatumbo. Mientras consiguen la plata con las administraciones departamentales y el Gobierno Nacional para concretarlo, sus movimientos estudiantiles están llegando hasta las zonas veredales a dictar talleres para los miembros de las Farc, con lo que le apuestan a la reconciliación.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61905' target='_blank' >VER MAS...</a></div>")} className="personaje dos">
            <div className="punto color1"><span>Santanderes</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Las universidades bogotanas se ponen las botas del posconflicto", "<p>En Bogotá, las universidades no se están limitando sólo a estudiar el conflicto desde las aulas, sino que tienen una serie de inciativas para intervenir en los territorios. Con esto, piensan ayudar a sanar las heridas del conflicto, lograr que los diferentes sectores de la población se integren y garantizar que el conflicto no se vuelva a repetir. Por ejemplo en los Andes y en la Javeriana han diseñado maestrías enfocadas en la construcción de paz. En los Andes, también, los estudiantes hicieron unas donaciones con las que le van a pagar la maestría a un ex combatiente de las Farc, una víctima y un miembro de las Fuerzas Armadas.</p><p>Por su lado, la Distrital y la Nacional están trabajando a fondo en la implementación de los acuerdos. La Distrital está diseñando el modelo de educación para los ex combatientes de las Farc y la Nacional, por medio de su Centro de Pensamiento, realizó, entre otras cosas, el censo socioeconómico de las Farc.</p><p>El Rosario diseñó un plan de 30 años en donde trabajarán por la paz desde 3 ejes principales: investigación, pedagogía e intervención.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61906' target='_blank' >VER MAS...</a></div>")} className="personaje tres">
            <div className="punto color1"><span>Bogotá</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Las universidades públicas se meten de lleno en el posconflicto", "<p>En el sur del país la Surcolombiana de Neiva, Huila y la Universidad de la Amazonía en Florencia, Caquetá, han llevado a grupos de estudiantes a las zonas veredales para que hablen con los exguerrilleros, van a reformar sus carreras para incluir cátedras, seminarios y talleres sobre construcción de paz y quieren que algunos de sus profesores les enseñen a planear a los miembros de las Farc los proyectos productivos para los que se supone, cada uno recibirá ocho millones de pesos.</p><p>La Surcolombiana va a becar a los responsables políticos de las zonas veredales del sur Ramiro Durán (de la zona veredal de la Carmelita en Putumayo), Federico Montes (de la zona veredal de la Montañita en Caquetá) y Daneiro Santamaria (de Miravalle, la zona de San Vicente del Caguán) para que hagan una maestría en Conflicto, Territorio y Cultura, un posgrado que lleva diez años y ha graduado a ocho promociones.</p><p>La Uniamazonía creó a principios de este año la Oficina de Paz en la que trabajan de manera directa diez profesores de diferentes áreas a los que se les liberó de las clases para que se dedicaran de lleno a pensar estrategias de intervención. Una de ellas, por ejemplo, es el 'Correo de la reconciliación', que consiste en que entre exguerrilleros y estudiantes de la universidad se han intercambiado cartas.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61696' target='_blank' >VER MAS...</a></div>")} className="personaje cua">
            <div className="punto color1"><span>Sur</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "En el Pacífico, las universidades hacen desde atención a las víctimas hasta diplomados para ex guerrilleros", "<p>Las universidades públicas y privadas de los departamentos de Valle, Cauca y Nariño se están pensando el posconflicto desde hace rato. La pionera ha sido la Universidad Javeriana de Cali, a través del Centro de Estudios Interculturales que dirige Manuel Ramiro Muñoz, ganador del premio a los Mejores Líderes de Colombia en 2016, y que desde hace años viene pensando estrategias para entender y promover el diálogo entre comunidades indígenas, afros, campesinos, empresarios y ahora ex combatientes de las Farc y militares para ayudar a desarticular los conflictos sociales en el suroccidente. El Instituto no sólo ha trabajado en crear puentes entre estos actores sino que ha hecho investigación y está ofreciendo diplomados de formación en liderazgo político y construcción de paz para todos ellos. No es la única. La Universidad del Valle, en Cali y la Universidad del Cauca, están ofreciendo diplomados similares para ex guerrilleros de las zonas veredales y todas, incluida la Universidad Icesi, están implementando la Catedra de Paz para sus propios estudiantes. Además, la Universidad de Nariño desarrolló un piloto con víctimas del conflicto para ayudarlas a superar los traumas que tienen por la guerra.</p>" +
      "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61904' target='_blank' >VER MAS...</a></div>")} className="personaje cin">
            <div className="punto color1"><span>Pacífico</span></div>
          </div>
        </div>
      </div>
    )
  }
}
