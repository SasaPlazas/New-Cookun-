import * as components from './components/indexPadre';
import Post, {PostType} from './components/Post/Post';
import Navbar from './components/navigation/NavBar';
import Categories from './components/categories/categories';

//import data
import {recipes}  from './data/data';


class AppContainer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();

        //mostrar la bara de navegacion
        const navbar = new Navbar();
        //mostrar la barra de categorias
        const categories = new Categories();
    }

    render () {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    .container {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 10px;
                        margin-top: 4rem;
                    }
                </style>
                <navbar-component></navbar-component>
                <categories-component></categories-component>
                <div class="container">
                </div>

                
            `;
        }
}
}

customElements.define('app-container', AppContainer);
