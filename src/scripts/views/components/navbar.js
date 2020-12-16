/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

class Navigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="nav" id="drawer">
      <div class="brand">
          <p class="brand-name p-3">restplore</p>
      </div>
        <ul>
            <li class="nav-item"><a class="nav-link" href="#/">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#/like">Favorite</a></li>
            <li class="nav-item"><a class="nav-link" href="https://github.com/RifkiEr24" target="_blank" rel="noopener">About Us</a></li>

        </ul>
    </nav>
    <a id="hamburger" aria-label="Hamburger">☰</a>
            `;
  }
}

customElements.define('navigation-bar', Navigation);
