import { setTechnologyId } from "./transientstate.js"

const handleTechnologyChoice = (changeEvent) => {
    if(changeEvent.target.id === "technologies") {
        const chosenOption = parseInt(changeEvent.target.value)
        setTechnologyId(chosenOption)
    }
}

export const technologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const techOpts = await response.json()

    document.addEventListener("change", handleTechnologyChoice)

    let techHTML = `<select id='technologies'>
    <option type='radio' name='technology' value='' selected disabled hidden/> Technology
    `

    const divStringArray = techOpts.map(
        (technology) => {
            return `<div>
            <option value='${technology.id}'>${technology.package}</option>
            </div>`
        }
    )

     techHTML += divStringArray.join("")
     techHTML += "</select>"
     return techHTML   
}