import html from 'choo/html'
import Hydra from './Hydra.js'
import Editor from './EditorComponent.js'
// import Editor from './EditorCm6.js'

let yo = true;

export default function mainView(state, emit) {
    if (yo) {
        setInterval(() => {
            emit('gallery:showExample');
        }, 60000);
        yo = false;
    }

    return html`
      <body>
      <div id="hydra-ui">
        ${state.cache(Hydra, 'hydra-canvas').render(state, emit)}
        <!---<canvas id="audio-canvas">
        </canvas>--->
      </div>

      ${state.cache(Editor, 'editor').render(state, emit)}


      <div id="tarifs">
        <dl>
          <dt>Eau plate / pétillante</dt>
          <dd>Gratuit</dd>
        </dl>
        <dl>
          <dt>Fritz Cola 0</dt>
          <dd>2€</dd>
        </dl>
        <dl>
          <dt>Klak Maté // Ginger Beer </dt>
          <dd>3€</dd>
        </dl>
        <dl>
          <dt>Pils</dt>
          <dd>2€</dd>
        </dl>
        <dl>
          <dt>Smash Field</dt>
          <dd>3.5€</dd>
        </dl>
        <dl>
          <dt>Vin blanc / rouge</dt>
          <dd>3€</dd>
        </dl>
        <dl>
          <dt>Moscow Mule / Moscow Mate</dt>
          <dd>8€</dd>
        </dl>
      </div>

      </body>
    `
}
