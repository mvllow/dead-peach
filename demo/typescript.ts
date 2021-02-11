type Fruit = 'pitaya' | 'durian' | 'guava'

let cart: Fruit[] = []

/**
 * addToCart
 *
 * @param fruit
 * @returns
 */
export const addToCart = (fruit: Fruit) => {
  return cart.push(fruit)
}

// addToCart('bagel')
addToCart('durian')
