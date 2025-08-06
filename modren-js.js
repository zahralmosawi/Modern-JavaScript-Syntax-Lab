//  Exercise 1:
const nums = [13, 87, 2, 89, 12, 4, 90, 63]
const numsTimesTwo = nums.map((num) => {
    return `${num * 2}`
});

console.log(numsTimesTwo)

// Exercise 2:
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']
const [firstIngredient,secondIngredient] = pizzaToppings

console.log(firstIngredient)
console.log(secondIngredient)

// Exercise 3:
const car = {
  make: 'Audi',
  model: 'Q5',
}

const {make, model} = car

console.log(make)
console.log(model)

// Exercise 4:
const morePizzaToppings = ['Cheese', 'Sauce']
const uncontroversialPizzaToppings = [...morePizzaToppings]

console.log(uncontroversialPizzaToppings)

// Exercise 5:
const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
}
const myCar = {...anotherCar}
anotherCar.make  = 'Audi'
anotherCar.model  = 'Q5'

console.log(anotherCar)
console.log(myCar)

// Exercise 6
const propertyName = 'zahra'
const userProfile = {
    [propertyName]: 'zahra@gmail.com'
}

console.log(userProfile)

// Exercise 8
function fname(noun, adjective){
    return 'The ' + noun + ' is ' + adjective
}
console.log(fname('cat', 'orange'))

// Exercise 9
const pizza = 'tasty'
let tast = pizza === 'tasty' ? 'yum' : 'yuck'

console.log(tast)

// Exercise 10:
const localLangConfig = null

const lang = localLangConfig || 'en'
console.log(lang)

const savedUserTheme = null
const theme = savedUserTheme || 'light'

console.log(theme)

// Exercise 11
const adventurer = {
  name: 'Alice',
}
console.log(adventurer.cat?.age)