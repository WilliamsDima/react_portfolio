import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import useSound from 'use-sound'
import type { RootState, AppDispatch } from '../store/index'
import { setData, setSkip, setSound } from '../store/redusers/main/main'
import btn from '../assets/audio/btn.mp3'
import wooh from '../assets/audio/wooh.mp3'
import woohv2 from '../assets/audio/woohv2.mp3'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
    const dispatch = useAppDispatch()

    return {
        setData: (data: any) => {
            dispatch(setData(data))
        },
        setSkip: (value: boolean) => {
            dispatch(setSkip(value))
        },
        setSound: (value: boolean) => {
            dispatch(setSound(value))
        }
    }
}

const useBtn = () => {  
    const [play] = useSound(btn, 
        {
            volume: 0.7
        })

    const playBtn = () => {
        play()
    }

    return { playBtn }
}

const useWoohV2 = () => {  
    const [play] = useSound(woohv2, 
        {
            volume: 0.5
        })

    const playWoohv2 = () => {
        play()
    }

    return { playWoohv2 }
}

const useWooh = () => {  
    const [play] = useSound(wooh, 
        {
            volume: 0.5
        })

    const playWooh = () => {
        play()
    }

    return { playWooh }
}

export const useAudio = () => {

    const {playBtn} = useBtn()
    const {playWooh} = useWooh()
    const {playWoohv2} = useWoohV2()

    return { playBtn, playWooh, playWoohv2 }
}