import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import useSound from 'use-sound'
import type { RootState, AppDispatch } from '../store/index'
import { setData, setForm, setImages, setSkip, setSound, setWork } from '../store/redusers/main/main'
import btn from '../assets/audio/btn.mp3'
import wooh from '../assets/audio/wooh.mp3'
import woohv2 from '../assets/audio/woohv2.mp3'
import ambient from '../assets/audio/ambient.mp3'
import { IImage, IWorks } from '../store/redusers/main/types'

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
        },
        setImages: (value: IImage[]) => {
            dispatch(setImages(value))
        },
        setWork: (value: any) => {
            dispatch(setWork(value))
        },
        setForm: (value: boolean) => {
            dispatch(setForm(value))
        },
    }
}

const useAmbient = () => {  
    const [play, {stop}] = useSound(ambient, 
        {
            volume: 0.7
        })

    const playAmbient = () => {
        play()
    }

    const stopAmbient = () => {
        stop()
    }

    return { playAmbient, stopAmbient }
}

const useBtn = () => {  
    const [play] = useSound(btn, 
        {
            volume: 0.5
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
    const {playAmbient, stopAmbient} = useAmbient()

    return { playBtn, playWooh, playWoohv2, playAmbient, stopAmbient }
}