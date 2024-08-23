class Card extends HTMLElement {
   
static get observedAttributes(){
    return ["img","title","desc","txtbutton"];
}

    constructor(){
        super();
        this.attachShadow({mode:'open'});

    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){

        if (oldValue ==! newValue) {
        }
        
        this[propName] = newValue;
        this.render();
    }
    

    render(){
        
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="./src/components/card/card.css">
        <div class="product-card">
        <div class="text--productcard">
        <h1>${this.title}</h1>
        <p>${this.desc}</p>
        <button>${this.txtbutton}</button>
        </div>
        <img src="${this.img}" alt="">
        </div>

        
       
        `;

    }
}

customElements.define('nintendo-card',  Card);


export default Card;