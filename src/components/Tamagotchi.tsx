import { useState } from "react"
import {controlls} from '../controller/utils.ts'

export default function Tamagotchi(){
    const [tamagotchiHP, setTamagotchiHP] = useState(10)

    return(
        <>
            <div>
                <h1>Tomagoshi</h1>
                <div>
                    <p>HP</p>
                    <p>{tamagotchiHP}</p>
                </div>
                <button onClick={()=>setTamagotchiHP(controlls.play(tamagotchiHP))}>Play</button>
            </div>
        </>
    )
}