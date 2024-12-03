export const firePottery = (pPottery,pTemp) => {
    pPottery.fired = true
    if (pTemp>2200) {
        pPottery.cracked = true
    } else {
        pPottery.cracked = false
    }
    return pPottery
}