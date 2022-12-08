import { createSlice } from '@reduxjs/toolkit'
import { IStore } from './types'
import { mainActions } from '../../actions/main/mainActions'

const initialState: IStore = {
    data: null,
    main: null,
    about: null,
    skills: null,
    works: null,
    skipIntro: false,
    sound: false,
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        ...mainActions
    },
})

export const mainReducer = (state = initialState, action: any) => {
    return mainSlice.reducer(state, action);
};

export const { setData, setSkip, setSound } = mainSlice.actions;