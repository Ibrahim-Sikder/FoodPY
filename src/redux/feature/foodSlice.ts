import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    foods: []
}
const foodSlice = createSlice({
    name: 'foods',
    initialState,
    reducers: {}
})




export default foodSlice.reducer