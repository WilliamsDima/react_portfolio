import React, { FC, memo } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import styles from './style.module.scss'
import { IImage, IWorks } from '../../../store/redusers/main/types'
import Description from '../../atoms/Description'

type Modal = {
    images: IImage[]
    work: IWorks
}


const ModalImg: FC<Modal> = memo(({images, work}) => {

    const img = images.find((it) => it.id === work.id) 

    const theme = useTheme()
    const [activeStep, setActiveStep] = React.useState(0)
    const maxSteps = img?.urls?.length || 0
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
  
    const handleStepChange = (step: number) => {
      setActiveStep(step)
    }

    const handleImage = (url: string) => {

    }

    return (
    <Box className={styles.carusel}>
        <Description work={work}/>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
            {img && img?.urls && img?.urls.map((url, index) => (
            <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                <div className={styles.img} style={{backgroundImage: `url(${url})`}}></div>
                ) : null}
            </div>
            ))}
        </SwipeableViews>
        <MobileStepper
            steps={maxSteps}
            position="static"
            sx={{width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#08FDD8'}}
            activeStep={activeStep}
            nextButton={
            <Button
                size="small"
                onClick={handleNext}
                sx={{fontSize: 16, zIndex: 10, color: '#08FDD8'}}
                disabled={activeStep === maxSteps - 1}
            >
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
            </Button>
            }
            backButton={
            <Button 
            sx={{fontSize: 16, color: '#08FDD8'}}
            size="small" 
            onClick={handleBack} 
            disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
                ) : (
                <KeyboardArrowLeft />
                )}
            </Button>
            }
        />
    </Box>
    )
})

export default ModalImg