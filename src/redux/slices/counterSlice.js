/*
 * createSlice methodu import edilir
 * createSlice'in istedği parametreler
 * - - name: slice ismi > string
 * - - initialState: başlangıç state'i
 * - - reducers: aksiyonların görevlerini tanımladığımız fonksiyonlar
 */

import { createSlice } from "@reduxjs/toolkit"



const counterSlice = createSlice({
    name: 'counter',
    initialState : {
        count: 0,
        isDarkTheme:true
    },
    //statein nasıl değişeceğine karar veren fonksiyonlar
    reducers:{
        increase: (state) => {
            state.count++;
        },

        decrease: (state) => {
            state.count--;
        },

        setCount: (state, action) => {
            state.count = action.payload
        },

        toggleTheme:(state) => {
            state.isDarkTheme = !state.isDarkTheme;
        }
    },
});




// slice'İn oluşturduğu reducer fonksiyonunu store'a tanıtmak için export edelim
export default counterSlice.reducer;

//sliceın oluşturduğu aksiyon oluşturan fonksiyonları bileşenlerde kullanmak için export
export const {decrease, increase, setCount, toggleTheme} = counterSlice.actions;