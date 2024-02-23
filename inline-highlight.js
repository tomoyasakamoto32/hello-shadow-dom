class InlineHighlight extends HTMLElement {
  constructor () {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
    <span class="highlight">
      <slot></slot>
    </span>
    `

    const bgColor = this.getAttribute("data-bg-color");
    let style = document.createElement("style");
    style.textContent = getStyleText(bgColor);
    shadow.appendChild(style);
  }
}

const getStyleText = (bgColor) => `
.highlight {
  background-color: ${bgColor};
  padding: 0.125rem 0.25rem;
}`
  
customElements.define("inline-highlight", InlineHighlight);