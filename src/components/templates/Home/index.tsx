import { useEffect, useState, FC, memo } from 'react'
import { useActions, useAppSelector } from '../../../hooks/hooks'
import styles from './style.module.scss'
import cn from 'classnames'
import Intro from '../../organisms/Intro'
import Modal from '../../organisms/Modal'
import ModalIntro from '../../organisms/ModalIntro'
import StarsMove from '../../molecules/StarsMove'
import MainContent from '../../organisms/MainContent'

type Home = {
 
}

const HomeTemplate: FC<Home> = memo(({}) => {

    const { data, skipIntro, startIntro } = useAppSelector((state) => state.main)
    const { setSkip, setSound, setStartIntro } = useActions()

    const [modal, setModal] = useState(true)


    const startHandler = (value: boolean) => {
        if (value) {
            console.log(1111);
            
            setSound(value)
        }

        setModal(false)
        setStartIntro(true)
    }

    const skipHandler = () => {
        setSkip(true)
        sessionStorage.setItem('skip-intro', 'true')
    }

    const skip = skipIntro || sessionStorage.getItem('skip-intro')
    const showModal = !skip
    const showStars = !startIntro && !skip
    const showIntro = startIntro && !skip
    

    useEffect(() => {

        // console.log('render home...');
        // console.log('skip', skip);
        
        if (sessionStorage.getItem('skip-intro')) {
            setSkip(true)
            setStartIntro(false)
        }
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

                <MainContent start={startIntro && !skip}/>

            </div>
        </main>
    )
})

export default HomeTemplate
