import { useEffect, useState, FC, memo } from 'react'
import { useActions, useAppSelector } from '../../../hooks/hooks'
import styles from './style.module.scss'
import cn from 'classnames'
import Intro from '../../organisms/Intro'
import Modal from '../../organisms/Modal'
import ModalIntro from '../../organisms/ModalIntro'
import StarsMove from '../../molecules/StarsMove'
import MainContent from '../../organisms/MainContent'
import { IStore } from '../../../store/redusers/main/types'

type Home = {
 
}

const HomeTemplate: FC<Home> = memo(({}) => {

    const { data, skipIntro } = useAppSelector((state: { main: IStore }) => state.main)
    const { setSkip, setSound } = useActions()

    const [startIntro, setStartIntro] = useState(false)
    const [endIntro, setEndIntro] = useState(false)
    const [modal, setModal] = useState(true)

    let endIntroTimer: NodeJS.Timeout | undefined;

    const startHandler = (value: boolean) => {
        if (value) {
            setSound(value)
        }

        setModal(false)
        setStartIntro(true)

        
        endIntroTimer = setTimeout(() => {
            setEndIntro(true)
            setSkip(true)
            sessionStorage.setItem('skip-intro', 'true')
        }, 27000)
    }

    const skipHandler = () => {
        setSkip(true)
        setEndIntro(true)
        sessionStorage.setItem('skip-intro', 'true')
    }

    const showModal = !endIntro && !skipIntro && !sessionStorage.getItem('skip-intro')
    const showStars = !startIntro && !endIntro && !skipIntro
    const showIntro = startIntro && !endIntro && !skipIntro

    useEffect(() => {
        
        if (skipIntro || sessionStorage.getItem('skip-intro')) {
            setEndIntro(true)
        }

        return (() => {
            endIntroTimer && clearTimeout(endIntroTimer)
        })
    }, [])

    return (
        <main className={styles.container}>
            
            <div className={cn(styles.content, {
                [styles.active]: data
            })}>

                {showModal && <Modal visible={modal} close={() => setModal(true)}>
                    <ModalIntro start={startHandler}/>
                </Modal>}

                {showStars && <StarsMove />}
                {showIntro && <Intro skip={skipHandler}/>}

                {endIntro && <MainContent />}

            </div>
        </main>
    )
})

export default HomeTemplate
