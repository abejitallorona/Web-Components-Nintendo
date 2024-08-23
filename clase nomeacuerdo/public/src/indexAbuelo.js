import * as components from './components/indexPadre.js'

class AppContainer extends HTMLElement{


    constructor(){
    super();
    this.attachShadow({mode:"open"}); //encapusular el código y permitir que el dom encuentre nuestra nueva clase:c
}

connectedCallback(){
this.render();
}

render(){
this.shadowRoot.innerHTML = `
<link rel="stylesheet" href="./src/indexAbuelo.css">
<section class="row-cards">

<nintendo-card title="The legend of Zelda"
desc="Potencia tu juego con los amiibo de la coleccion de zelda."
txtbutton="¡Completa tu colección! ▶"
img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/kj6n1mmv5i3yqjvk6f56">
</nintendo-card>

<nintendo-card title="Megapromoción 12+2"
desc="2 meses adicionales al comprar cualquier suscripción de 12 meses."
txtbutton="Ver más detalles ▶"
img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/afdfdrgq8i4dpnere9h5">
</nintendo-card>

<nintendo-card title="Mando de Nintendo 64"
desc="Disfruta de los juegos de Nintendo 64 de la forma en que se deben jugar: ¡con un mando inalámbrico de tamaño completo de Nintendo 64!"
txtbutton="Comprar ▶"
img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/lvk7zz3tlmx5gqhpgf5r">
</nintendo-card>

</section>
`

}


}

customElements.define('app-container', AppContainer);