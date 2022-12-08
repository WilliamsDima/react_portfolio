import {
  Route,
  Routes,
} from "react-router-dom"
import About from "../screens/About"
import Home from "../screens/Home"
import NotFount from "../screens/NotFound"
import Skills from "../screens/Skills"
import { RoutesNames } from "./routes-names"

const RoutesApp = (props: any) => {

  return (
    <>
      <Routes>
        <Route path={RoutesNames.Home} element={<Home />} />
        <Route path={RoutesNames.About} element={<About />} />
        <Route path={RoutesNames.Skills} element={<Skills />} />

        {/* 404 page */}
        <Route path="*" element={<NotFount />} />
      </Routes>
    </>
  )
}

export default RoutesApp
