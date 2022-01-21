import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const INIT_STATE = {
     cars: ["Model S", "Model Y", "Model 3", "Model X"]
}

const carSlice = createSlice({
    name: 'car',
    initialState: INIT_STATE,
    reducers: {}
})


export const selectCars = state => state.car.cars

export default carSlice.reducer