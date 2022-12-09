import { useEffect } from "react"
import {
  Route,
  Routes,
} from "react-router-dom"
import { useAppSelector, useAudio } from "../hooks/hooks"
import About from "../screens/About"
import Home from "../screens/Home"
import NotFount from "../screens/NotFound"
import Skills from "../screens/Skills"
import Works from "../screens/Works"
import { RoutesNames } from "./routes-names"

const RoutesApp = (props: any) => {

  const { sound } = useAppSelector(store => store.main)

  const {playAmbient, stopAmbient} = useAudio()

  useEffect(() => {

    if (sound) {
        playAmbient()
    } else {
        stopAmbient()
    }
    
}, [sound])

  return (
    <>
      <Routes>
        <Route path={RoutesNames.Home} element={<Home />} />
        <Route path={RoutesNames.About} element={<About />} />
        <Route path={RoutesNames.Skills} element={<Skills />} />
        <Route path={RoutesNames.Works} element={<Works />} />

        {/* 404 page */}
        <Route path="*" element={<NotFount />} />
      </Routes>
    </>
  )
}

export default RoutesApp
