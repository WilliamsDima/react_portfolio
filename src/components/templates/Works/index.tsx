import styles from './style.module.scss'
import { useAppSelector } from '../../../hooks/hooks'
import { memo } from 'react'
import { Saturn } from '../../organisms/Planets/Saturn/Saturn'
import WorksList from '../../organisms/WorksList'

const WorksTemplate = memo(() => {

    const { works, images } = useAppSelector(state => state.main)

    return (
        <div className={styles.container}>

            {works && images && <>

                <div className={styles.pageContent}>
                    <WorksList works={works} images={images}/>
                </div>

                <Saturn />
            
            </>}
        </div>
    )
})

export default WorksTemplate
