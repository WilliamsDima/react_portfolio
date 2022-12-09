import react, { memo, FC } from 'react'
import { IImage, IWorks } from '../../../store/redusers/main/types'
import WorkItem from '../../molecules/WorkItem'
import styles from './style.module.scss'

type WorksList = {
    works: IWorks[]
    images: IImage[]
}


const WorksList: FC<WorksList> = memo(({works, images}) => {

    console.log('images...', images);
    console.log('works', works);
    
   
    return (
        <div className={styles.works}>
            {works.map((work, i) => {
                const img = images.find((it) => it.id === work.id)
                
                return <WorkItem work={work} key={i} img={img}/>
            })}
        </div>
    )
})

export default WorksList