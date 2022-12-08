import { FC } from 'react';
import { useAppSelector, useAudio } from '../../../hooks/hooks';
import Title from '../../atoms/Title/Title';
import styles from './Text.module.scss'

const TextHello: FC = (props) => {

    const { main, sound } = useAppSelector(state => state.main)
    const {playBtn, playWoohv2} = useAudio()

    const titleText: string[] | undefined = main?.text.split('')

    const openModal = () => {
        sound && playBtn()
        sound && playWoohv2()
    }
    
    return (
        <div className={styles.info}>
            <div className={styles["text__content"]}>
                <h1 className={styles["text__me"]}>{main?.title}&nbsp; 
                    <span className={styles["glitch"]} data-text="Dmitry">{main?.glitch}</span>
                </h1>
                
                {!!titleText?.length && <Title text={titleText}/>}

                <h2 className={styles["prof__me"]}>{main?.subtitle}</h2>
                
                <div className={styles["send-link"]}>
                    <button className={styles["send-btn"]} onClick={openModal}>написать мне</button>
                </div>
            </div>
        </div>
    )
}

export default TextHello
