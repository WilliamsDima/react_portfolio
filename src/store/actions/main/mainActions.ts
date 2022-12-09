import { MainActions } from "./mainTypes"

export const mainActions: MainActions = {
    setData: (state, { payload }) => {
        
        const { about, main, skills, works } = payload

        state.data = payload
        state.main = main
        state.about = about 
        state.skills = skills
        state.works = works
    },
    setSkip: (state, { payload }) => {
        state.skipIntro = payload
    },
    setSound: (state, { payload }) => {
        state.sound = payload
    },
    setImages: (state, { payload }) => {
        state.images = payload
    },
}
