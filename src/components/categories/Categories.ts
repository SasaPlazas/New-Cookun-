class Categories extends HTMLElement {

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
            .categories {
            background-color: green;
            padding: 2rem 5rem;
            border-radius: 1rem;
            color: white;
            }
            section {
            display:flex;
            gap: 2rem;
            justify-content:space-between;
            padding: 0 10rem;
            }


            </style>
            <section>
            <div class="categories">Desserts</div>
            <div class="categories">Soups</div>
            <div class="categories">Spaguetties</div>
            <div class="categories">Salads</div>
            </section>
            `;
        }
    }
}

customElements.define('categories-component', Categories);

export default Categories;