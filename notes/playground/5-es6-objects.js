// Object property shorthand

const name = 'Andrew'
const age = 27

const user = {
    name,
    age,
    location: 'Dallas'
}

console.log(user)
console.log(typeof([1,3,4,3,6]))

// Object destructuring

const product = {
    label: 'Red notebook',
    price: '$3',
    stock: 54,
    salePrice: undefined
}

const { label: productLabel, stock } = product

console.log(productLabel, stock)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)