import {Tamagotchi} from '../components/types'

function play(tamagotchiStatus: Tamagotchi): Tamagotchi{
    if(tamagotchiStatus.stamina === 0){
        return tamagotchiStatus
    }

    const currentlyTamagotchi = {
        ...tamagotchiStatus,
        stamina: tamagotchiStatus.stamina - 2,
        happiness: tamagotchiStatus.happiness === 10 ? 10 : tamagotchiStatus.happiness + 1 
    }

    return currentlyTamagotchi
}

function feed(tamagotchiStatus: Tamagotchi): Tamagotchi{
    if(tamagotchiStatus.food === 0){
        return tamagotchiStatus
    }

    const currentlyTamagotchi = {
        happiness: tamagotchiStatus.happiness === 10 ? 10 : tamagotchiStatus.happiness + 1,
        life: tamagotchiStatus.life === 10 ? 10 : tamagotchiStatus.life + 1,
        stamina: tamagotchiStatus.stamina === 10 ? 10 : tamagotchiStatus.stamina + 1,
        food: tamagotchiStatus.food - 2
    }

    return currentlyTamagotchi
}

function rest(tamagotchiStatus: Tamagotchi): Tamagotchi{
    if(tamagotchiStatus.happiness === 0){
        return tamagotchiStatus
    }

    const currentlyTamagotchi = {
        ...tamagotchiStatus,
        life: tamagotchiStatus.life === 10 ? 10 : tamagotchiStatus.life + 1,
        stamina: tamagotchiStatus.stamina === 10 ? 10 : tamagotchiStatus.stamina + 1,
        happiness: tamagotchiStatus.happiness - 2
    }

    return currentlyTamagotchi
}

function hunt(tamagotchiStatus: Tamagotchi): Tamagotchi{
    if(tamagotchiStatus.life === 0){
        return tamagotchiStatus
    }

    const currentlyTamagotchi = {
        ...tamagotchiStatus,
        food: tamagotchiStatus.food === 10 ? 10 : tamagotchiStatus.food + 1,
        life: tamagotchiStatus.life - 1
    }

    return currentlyTamagotchi
}

export const tamagotchiRepository = {
    play,
    feed,
    rest,
    hunt
}