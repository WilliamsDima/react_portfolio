import { FC } from 'react'
import { IImage, IWorks } from '../../../store/redusers/main/types'
import CaruselImg from '../CaruselImg'
import styles from './style.module.scss'

type WorkItem = {
    work: IWorks
    img: IImage | undefined
}

const WorkItem: FC<WorkItem> = ({work, img}) => {

    // console.log('img', img);
    


    return (
        <div className={styles.workItem}>

            {img?.urls && <CaruselImg images={img?.urls} handleImage={(url) => console.log(url)}/>}
            
        </div>
    )
}

export default WorkItem