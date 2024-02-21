export const orderList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")
    const orders = await response.json()


    let ordersHTML = ""
    const divStringArray = orders.map(
        (order) => {
            const orderPrice = order.paint.price + order.interior.price + order.technology.price + order.wheel.price
            const usdPrice = orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
            return `<div>
            <div> ${order.paint.color} car with ${order.wheel.type} wheels, ${order.interior.seat} interior, and the ${order.technology.package} for a total cost of ${usdPrice}</div>
            </div>`
        }
    )
    ordersHTML += divStringArray.join("")
    return ordersHTML
}