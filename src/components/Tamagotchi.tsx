import { useEffect, useState } from "react"
import {tamagotchiController} from '../controller/utils.ts'
import {Tamagotchi} from './types.ts'

export default function TamagotchiComponent(){
    const initialTamagotchiStatus = ()=>{
        if(localStorage.getItem('pet')){
            const data = localStorage.getItem('pet')
            if(data){
                return JSON.parse(data)
            }
        }
        
        return {
            life: 8,
            stamina: 8,
            happiness: 8,
            food: 8
        }
    }

    const [tamagotchiStatus, setTamagotchiStatus] = useState<Tamagotchi>(initialTamagotchiStatus)

    // Salvar os dados do armazenamento local sempre que o estado do jogo Tamagotchi muda
    useEffect(() => {
        localStorage.setItem('pet', JSON.stringify(tamagotchiStatus));
    }, [tamagotchiStatus]);
    
    return(
        <>
            <div className="flex flex-col h-screen items-center justify-center gap-8 m-auto main--color">
                <h1 className="mt-4">Tamagotchi</h1>                
                <img className="block w-[300px] h-[300px] bg-slate-200" src="/padoru.png" alt="IMG"/>

                <div className="flex flex-1 flex-wrap justify-center w-full lg:w-[400px]">
                    <div className="tamagotchi__attribute">
                        <p>Stamina</p>
                        <p>{tamagotchiStatus.stamina >= 1 ? tamagotchiStatus.stamina : 'Tamagotchi está cansado (-_-)'}</p>
                    </div>
                    <div className="tamagotchi__attribute">
                        <p>Life</p>
                        <p>{tamagotchiStatus.life >= 1 ? tamagotchiStatus.life : 'Tamagotchi está morto (X_X)'}</p>
                    </div>
                    <div className="tamagotchi__attribute">
                        <p>Happiness</p>
                        <p>{tamagotchiStatus.happiness >= 1 ? tamagotchiStatus.happiness : 'Tamagotchi está triste (T.T)'}</p>
                    </div>
                    <div className="tamagotchi__attribute">
                        <p>Food</p>
                        <p>{tamagotchiStatus.food >= 1 ? tamagotchiStatus.food : 'Tamagotchi está com fome (O.O)'}</p>
                    </div>
                </div>

                <div className="flex justify-center items-center mb-4 lg:w-1/4 lg:h-6 gap-8 flex-1 tamagotchi__actions--color p-4">
                    <button onClick={()=>{
                        setTamagotchiStatus(tamagotchiController.play(tamagotchiStatus))}}>Play</button>
                    <button onClick={()=>{
                        setTamagotchiStatus(tamagotchiController.feed(tamagotchiStatus))}}>Feed</button>
                    <button onClick={()=>{
                        setTamagotchiStatus(tamagotchiController.rest(tamagotchiStatus))}}>Rest</button>
                    <button onClick={()=>{
                        setTamagotchiStatus(tamagotchiController.hunt(tamagotchiStatus))}}>Hunt</button>
                </div>
            </div>
        </>
    )
}