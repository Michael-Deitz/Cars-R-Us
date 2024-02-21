import { handlePartsSelectedClick } from "./transientstate.js";




// const handlePartsSelectedClick = (clickEvent) => {
//     if(clickEvent.target.id === "placeOrder") {
        
//         if(isNaN(paint) || isNaN(interior) || isNaN(technology) || isNaN(wheels)) {
//             window.alert("Please select all options")
//             clickEvent.preventDefault()
//         } else {
//         carPartsSelected()
//         }
//   } 
// }

export const placeOrder = () => {

    document.addEventListener("click", handlePartsSelectedClick)

    return "<div><button id='placeOrder'>Place Car Order</button></div>"
}