import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "employee") {

            const employeeId = itemClicked.dataset.id
            const employeeName = itemClicked.dataset.name

            let numberOfSales = 0

            const allOrders = getOrders()

            for (const order of allOrders) {
                if (parseInt(employeeId) === order.employeeId) {
                    numberOfSales++
                }
            }
            window.alert(`${employeeName} has sold ${numberOfSales} products`)
        }
    }
)





export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li
         data-type="employee"
         data-id="${employee.id}"
         data-name="${employee.name}"
        >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

