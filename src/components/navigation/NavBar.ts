class Navbar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }


    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
            .global{
            padding:1rem 3rem;
            display: flex;
            justify-content: space-between;
            }

            input {
            width:  40%;
            border-radius:10px;
            padding:.5rem 1rem;
            }

            </style>
            <div class="global"> 
            <div>
            <a href="">Home</a>
            <a href="">Explore</a>
            <a href="">Create</a>
            </div>
            <input type="text">
            <div>
                <button>
                    Log In 
                </button>
            </div>
            </div>

            `;
        }
    }
}

customElements.define('navbar-component', Navbar);

export default Navbar;