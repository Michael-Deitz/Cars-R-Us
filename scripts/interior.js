import { setInteriorId } from "./transientstate.js"

const handleInteriorChoice = (changeEvent) => {
    if(changeEvent.target.id === "interiors") {
        const chosenOption = parseInt(changeEvent.target.value)
        setInteriorId(chosenOption)
    }
}

export const interiorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiorOpts = await response.json()

    document,addEventListener("change", handleInteriorChoice)

    let interiorHTML = `<select id='interiors'>
    <option type='radio' name='interior' value='' selected disabled hidden/>Interiors
    `

    const divStringArray = interiorOpts.map(
        (interior) => {
            return `<div>
            <option value='${interior.id}'>${interior.seat}</option>
            </div>`
        }
    )
    interiorHTML += divStringArray.join("")
    interiorHTML += "</select>"
    return interiorHTML
}