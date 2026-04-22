import html from 'choo/html';
import Editor from './EditorComponent.js';
import Hydra from './Hydra.js';
// import Editor from './EditorCm6.js'

let yo = true;

export default function mainView(state, emit) {
    if (yo) {
        setInterval(() => {
            emit('gallery:showExample');
        }, 60000);
        yo = false;
    }

    
    const urlParams = new URLSearchParams(window.location.search);
    const hideMenu = urlParams.get('hide_menu');
    
    const tarifs = html`
      <div id="tarifs">
        <dl>
          <dt>Eau plate ou pétillante</dt>
          <dd>Gratuit</dd>
        </dl>
        <dl>
          <dt>Coca, Coca Zéro, Limonades</dt>
          <dd>2€</dd>
        </dl>
        <dl>
          <dt>Mate Mate</dt>
          <dd>4€</dd>
        </dl>
        <dl>
          <dt>Jupiler / Jupiler 0.0</dt>
          <dd>2,5€</dd>
        </dl>
        <dl>
          <dt>Delta / Delta Zero / Norm</dt>
          <dd>4.5€</dd>
        </dl>
      </div>
    `;
    
    return html`
      <body>
      <div id="hydra-ui">
        ${state.cache(Hydra, 'hydra-canvas').render(state, emit)}
        <!---<canvas id="audio-canvas">
        </canvas>--->
      </div>

      ${state.cache(Editor, 'editor').render(state, emit)}
      
      ${!hideMenu ? tarifs : null}

      </body>
    `
}
