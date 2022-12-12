import styles from './style.module.scss'
import { useActions, useAppSelector, useAudio } from '../../../hooks/hooks'
import Title from '../../atoms/Title/Title'
import TextPage from '../../molecules/TextPage'
import Jupiter from '../../organisms/Planets/Jupiter/Jupiter'
import { memo } from 'react'

const SkillsTemplate = memo(() => {

    const {setForm} = useActions()
    const { skills, sound } = useAppSelector(state => state.main)

    const titleText: string[] | undefined = skills?.title.split('')

    const { playBtn, playWoohv2 } = useAudio()

    const modalHandler = () => {
        setForm(true)
        sound && playBtn()
        sound && playWoohv2()
    }

    return (
        <div className={styles.container}>

            {skills && <>

                <div className={styles.pageContent}>
                    <Title text={titleText || []}/>
                    
                    <TextPage data={skills?.text || []}/>

                    <p className={styles.text}>Если есть какие-то вопросы то можете связаться со мной через <button onClick={modalHandler}>форму</button> или через социальные сети.</p>

                </div>

                <Jupiter />
            
            </>}
        </div>
    )
})

export default SkillsTemplate
