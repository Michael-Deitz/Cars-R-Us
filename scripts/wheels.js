import { setWheelId } from "./transientstate.js"

const handleWheelChoice = (changeEvent) => {
    if(changeEvent.target.id === "wheels") {
        const chosenOption = parseInt(changeEvent.target.value)
        setWheelId(chosenOption)
    }
}

export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheelsOpts = await response.json()

    document.addEventListener("change", handleWheelChoice)

    let wheelHTML = `<select id='wheels'>
    <option type='radio' name='wheel' value='' selected disabled hidden/> Wheels
    `

    const divStringArray = wheelsOpts.map(
        (wheel) => {
            return `<div>
            <option value='${wheel.id}'>${wheel.type}</option>
            </div>`
        }
    )

    wheelHTML += divStringArray.join("")
    wheelHTML += "</select>"
    return wheelHTML
}   