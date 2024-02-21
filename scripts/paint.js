import { setPaintId } from "./transientstate.js"

const handlePaintChoice = (changeEvent) => {
    if(changeEvent.target.id === "paints") {
        const chosenOption = parseInt(changeEvent.target.value)
        setPaintId(chosenOption)
    }
}

export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paintOpts = await response.json()

    document.addEventListener("change", handlePaintChoice)

    let paintHTML = `<select id='paints'>
    <option type='radio' name='paint' value='' selected disabled hidden>Colors</option>
     `

    const divStringArray = paintOpts.map(
        (paint) => {
            return `<div>
            <option value='${paint.id}'>${paint.color}</option>
            </div>`
        }
    )

    paintHTML += divStringArray.join("")
    paintHTML += "</select>"
    return paintHTML
}