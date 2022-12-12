import { FC } from 'react'
import { useAppSelector, useAudio } from '../../../hooks/hooks'
import { IImage, IWorks } from '../../../store/redusers/main/types'
import Description from '../../atoms/Description'
import styles from './style.module.scss'

type WorkItem = {
    work: IWorks
    img: IImage | undefined
    setModal: (work: IWorks) => void
}

const WorkItem: FC<WorkItem> = ({work, img, setModal}) => {

    const { playBtn, playWoohv2 } = useAudio()
    const { sound } = useAppSelector(store => store.main)

    const openModal = () => {
        setModal(work)
        sound && playBtn()
        sound && playWoohv2()
    }

    return (
        <li className={styles.workItem} onClick={openModal}>
            
            {img?.urls && <div className={styles.img} style={{backgroundImage: `url(${img?.urls[0]})`}}>
               <Description work={work} />
            </div>}
            
        </li>
    )
}

export default WorkItem