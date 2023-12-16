import {tamagotchiRepository} from '../repository/utils.ts'
import {Tamagotchi} from '../components/types.ts'

function play(tamagotchiStatus: Tamagotchi): Tamagotchi{
    return tamagotchiRepository.play(tamagotchiStatus);
}

function feed(tamagotchiStatus: Tamagotchi): Tamagotchi{
    return tamagotchiRepository.feed(tamagotchiStatus)
}

function rest(tamagotchiStatus: Tamagotchi): Tamagotchi{
    return tamagotchiRepository.rest(tamagotchiStatus)
}

function hunt(tamagotchiStatus: Tamagotchi): Tamagotchi{
    return tamagotchiRepository.hunt(tamagotchiStatus)
}

export const tamagotchiController = {
    play,
    feed,
    rest,
    hunt
}