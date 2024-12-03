let nextId = 1

export const makePottery = (pShape,pWeight,pHeight) => {
    const pottery = {
        shape : pShape,
        weight : pWeight,
        height : pHeight,
        id : nextId++
    }
    return pottery
}