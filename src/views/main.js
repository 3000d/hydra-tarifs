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
          <dt>Eau plate</dt>
          <dd>Gratuit</dd>
        </dl>
        <dl>
          <dt>Coca / Coca zéro</dt>
          <dd>2€</dd>
        </dl>
        <dl>
          <dt>Pils 33cl</dt>
          <dd>2,5€</dd>
        </dl>
        <dl>
          <dt>Jupiler 0.0</dt>
          <dd>2€</dd>
        </dl>
        <dl>
          <dt>Delta IPA / Duvel</dt>
          <dd>4.5€</dd>
        </dl>
      </div>

      </body>
    `
}
