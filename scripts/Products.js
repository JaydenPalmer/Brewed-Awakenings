import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "product") {

            const productId = itemClicked.dataset.id

            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    const fixedPrice = product.price.toFixed(2)
                    window.alert(`${product.name} costs $${fixedPrice}`)
                }
            }
        }
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li
        data-type="product"
        data-id="${product.id}"
        >${product.name}</li>`
    }

    html += "</ul>"

    return html
}

