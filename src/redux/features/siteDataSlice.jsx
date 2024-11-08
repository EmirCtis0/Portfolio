import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getSiteData = createAsyncThunk(
    'siteData',
    async () => {
        const response = await fetch(`/config.json`);
        const data = await response.json();
        return data
    },
)

export const siteDataSlice = createSlice({
    name: 'siteData',
    initialState: {
        value: null,
        isLoading: true
    },
    reducers: {
        //
    },
    extraReducers: (builder) => {
        builder.addCase(getSiteData.fulfilled, (state, action) => {
            state.value = action.payload;
            state.isLoading = false;
        })
    },
})

export const { setSiteData } = siteDataSlice.actions

export default siteDataSlice.reducer