const potteryToSell = []

export const toSellOrNotToSell = (pPottery) => {
    if (pPottery.cracked == false) {
        if (pPottery.weight>=6) {
            pPottery.price = 40
        } else {
            pPottery.price = 20
        }
        potteryToSell.push(pPottery)
    }
    return pPottery
}

export const usePottery = () => {
    return potteryToSell.map(obj => ({ ...obj }))
}