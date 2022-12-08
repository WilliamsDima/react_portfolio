import { PayloadAction } from "@reduxjs/toolkit"
import { Data, IStore } from "../../redusers/main/types"

export type MainActions = {
    setData: (state: IStore, payload: PayloadAction<Data>) => void
    setSkip: (state: IStore, payload: PayloadAction<boolean>) => void
    setSound: (state: IStore, payload: PayloadAction<boolean>) => void
}