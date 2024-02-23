const el = document.createElement('div');
const shadowRoot = el.attachShadow({mode: 'open'});
shadowRoot.innerHTML = '<h1>シャドウDOMです</h1>';

const container = document.querySelector('body');
container.appendChild(el);