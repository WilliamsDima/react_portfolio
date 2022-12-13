import React, {FC, ReactNode, useEffect, useState} from 'react'
import { getData, getImagesWorks } from '../../../api/firebase'
import { useActions, useAppSelector } from '../../../hooks/hooks'
import { Circles } from '../../atoms/Circles/Circles'
import Loader from '../../atoms/Loader'
import ThanksModal from '../../atoms/ThanksModal/ThanksModal'
import MySendForm from '../../molecules/Form/MySendForm'
import Modal from '../../organisms/Modal'
import ModalImg from '../../organisms/ModalImg'
import Navigation from '../../organisms/Navigation'
import Stars from '../../organisms/StarsBG'
import styles from './style.module.scss'

type Page = {
    children: ReactNode
}

const Page: FC<Page> = ({children}) => {

    const { setData, setImages, setWork, setForm } = useActions()
    const { data, skipIntro, works, images, work, formModal } = useAppSelector(store => store.main)
    const [thanksModal, setThanksModal] = useState(false)

    const setDataHandler = async () => {
        const res = await getData()

        setData(res)
    }

    const getImages = async () => {

        const urls: any = await getImagesWorks(works)

        Promise.all(urls).then((values) => {
            setImages([...values])
        })
    }

    useEffect(() => {

        // console.log('page render...');
        
        if (!data) {
            setDataHandler()
        }

        if (works && !images) {
            getImages()
        }
        
    }, [data, images])

    return (
        <div className={styles.page}>
            <section className={styles.content}>
                {children}
            </section>

            <Loader active={!data && !images} />
            <Stars />
            
            {(skipIntro || sessionStorage.getItem('skip-intro')) && 
                <>
                    <Modal visible={!!work} close={() => setWork(false)}>
                        {images && work && <ModalImg images={images} work={work}/>}
                    </Modal>

                    <Modal visible={formModal} close={() => setForm(false)}>
                        <MySendForm close={() => setForm(false)} setThanksModal={() => setThanksModal(true)}/>
                    </Modal>

                    <Modal visible={thanksModal} close={() => setThanksModal(false)}>
                        <ThanksModal close={() => setThanksModal(false)}/>
                    </Modal>

                    <Navigation />
                    <Circles />
                    <div className={styles.textTop}>
                        <p>&lt;sorry I <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg> space&gt;</p>
                        <p>&lt;you get what you give you&gt;</p>
                    </div>
                </>
            }
        </div>
    )
}

export default Page