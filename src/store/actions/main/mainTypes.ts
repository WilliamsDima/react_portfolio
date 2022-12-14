import { PayloadAction } from "@reduxjs/toolkit"
import { Data, IImage, IStore } from "../../redusers/main/types"

export type MainActions = {
    setData: (state: IStore, payload: PayloadAction<Data>) => void
    setSkip: (state: IStore, payload: PayloadAction<boolean>) => void
    setSound: (state: IStore, payload: PayloadAction<boolean>) => void
    setImages: (state: IStore, payload: PayloadAction<IImage[]>) => void
    setWork: (state: IStore, payload: PayloadAction<any>) => void
    setForm: (state: IStore, payload: PayloadAction<boolean>) => void
    setStartIntro: (state: IStore, payload: PayloadAction<boolean>) => void
}