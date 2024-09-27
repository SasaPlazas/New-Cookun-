export enum PostType {
    IMAGE =  'image',
}

class Post extends HTMLElement {
    image?: string

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
                    
                </style>
                <div class="post">
                <img src="${this.image}" alt="Post Image">
                
                </div>
            `;
        }
    }
}

customElements.define('post-component', Post);

export default Post;