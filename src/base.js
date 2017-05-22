import { h, render, Component } from 'preact';

import s from './base.css';
const data = require('../data/data.json');

export default class Base extends Component {

  render(props, state) {
    return(
      <div className={s.container}>
        <div className="cont_circulos">
          <img src="http://archivo.lasillavacia.com/archivos/historias/mapaspreelecciones2015/revocatoria3.jpg" alt="" className="background-img" />
          <a href="http://lasillavacia.com/node/60895" target="_blank">
            <div className="personaje uno">
              <div className="punto color2"><span>Cartagena</span></div>
            </div>
          </a>

          <a href="http://lasillavacia.com/node/60896" target="_blank">
            <div className="personaje dos">
              <div className="punto color1"><span>Bucaramanga</span></div>
            </div>
          </a>

          <a href="http://lasillavacia.com/node/60897" target="_blank">
            <div className="personaje tres">
              <div className="punto color1"><span>Bogotá</span></div>
            </div>
          </a>

          <a href="http://lasillavacia.com/node/60898" target="_blank">
            <div className="personaje cua">
              <div className="punto color2"><span>Buga</span></div>
            </div>
          </a>

          <a href="http://lasillavacia.com/node/60899" target="_blank">
            <div className="personaje cin">
              <div className="punto color1"><span>Neiva</span></div>
            </div>
          </a>
        </div>
      </div>
    )
  }
}
