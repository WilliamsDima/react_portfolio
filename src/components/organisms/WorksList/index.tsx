import react, { memo, FC } from 'react'
import { IImage, IWorks } from '../../../store/redusers/main/types'
import WorkItem from '../../molecules/WorkItem'
import styles from './style.module.scss'

type WorksList = {
    works: IWorks[]
    images: IImage[]
    setModal: (work: IWorks) => void
}


const WorksList: FC<WorksList> = memo(({works, images, setModal}) => {

    const sortByDateWorks = works && [...works].sort((a, b) => {
        return +b.date.toDate() - +a.date.toDate()
    })
   
    return (
        <ul className={styles.works}>
            {sortByDateWorks.map((work, i) => {
                const img = images.find((it) => it.id === work.id)
                
                return <WorkItem setModal={setModal} work={work} key={i} img={img}/>
            })}
        </ul>
    )
})

export default WorksList