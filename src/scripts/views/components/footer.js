/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p class="footer p-3">Copyright © 2020 - Restplore</p>
    </footer>
              `;
  }
}

customElements.define('footer-bar', Footer);
