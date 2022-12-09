import styles from './style.module.scss'
import { useAppSelector, useAudio } from '../../../hooks/hooks'
import Title from '../../atoms/Title/Title'
import TextPage from '../../molecules/TextPage'
import Mars from '../../organisms/Planets/Mars/Mars'
import { Socials } from '../../atoms/Socials/Socials'
import { memo } from 'react'

const AboutTemplate = memo(() => {

    const { about, sound } = useAppSelector(state => state.main)

    const { playBtn, playWoohv2 } = useAudio()

    const modalHandler = () => {
        sound && playBtn()
        sound && playWoohv2()
    }

    const titleText: string[] | undefined = about?.title.split('')

    return (
        <div className={styles.container}>

            {about && <>

                <div className={styles.pageContent}>
                    <Title text={titleText || []}/>
                    
                    <TextPage data={about?.text || []}/>

                    <button onClick={modalHandler} className={styles["link-add-team"]}>взять в команду</button>

                    <Socials />

                </div>

                <Mars />
            
            </>}
        </div>
    )
})

export default AboutTemplate
