import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    exp : false,
}

const ExpandSlice = createSlice({
    name: "expand",
    initialState,
    reducers: {
        show: (state) => {
            state.exp = !state.exp
            console.log("show ", state)
        },
    }
})

console.log("value :" , ExpandSlice)

export const {show} = ExpandSlice.actions
export default ExpandSlice.reducer