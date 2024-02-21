import { paintOptions } from "./paint.js";
import { interiorOptions } from "./interior.js";
import { technologyOptions } from "./technology.js";
import { wheelOptions } from "./wheels.js";
import { placeOrder } from "./ordersplaced.js";
import { orderList } from "./orders.js";


const container = document.querySelector("#container")

const render = async () => {
    const paintHTML = await paintOptions()
    const interiorHTML = await interiorOptions()
    const techHTML = await technologyOptions()
    const wheelHTML = await wheelOptions()
    const ordersPlacedHTML = await placeOrder()
    const orderListHTML = await orderList()

        const composedHTML = `
            <h1>Cars 'R Us</h1>
            
        <article class="options">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${paintHTML}
            </section>

            <section class="choices__interior options">
                <h2>Interior's</h2>
                ${interiorHTML}
            </section>

            <section class="choices__technology options">
                <h2>Technology</h2>
                ${techHTML}
            </section>

            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelHTML}
            </section>
            
            </article>
            
            <article class="orders">
                ${ordersPlacedHTML}
            </article>
            <article class="carOrders">
                <h2>Cars Ordered</h2>
                ${orderListHTML}
            </article>`



            container.innerHTML = composedHTML
    
}
document.addEventListener("newCarOrdered", render)

render()