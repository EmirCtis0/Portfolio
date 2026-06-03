import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const getInitialLanguage = () => {
    if (typeof localStorage === 'undefined') {
        return 'en'
    }

    const language = localStorage.getItem('language')

    return ['en', 'tr'].includes(language) ? language : 'en'
}

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
        allData: null,
        language: getInitialLanguage(),
        isLoading: true
    },
    reducers: {
        setLanguage: (state, action) => {
            const language = ['en', 'tr'].includes(action.payload) ? action.payload : 'en'

            state.language = language
            state.value = state.allData?.[language] || state.value

            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('language', language)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSiteData.fulfilled, (state, action) => {
            state.allData = action.payload;
            state.value = action.payload?.[state.language] || action.payload?.en || action.payload;
            state.isLoading = false;
        })
    },
})

export const { setLanguage } = siteDataSlice.actions

export default siteDataSlice.reducer
