import { configureStore } from '@reduxjs/toolkit'

import siteDataReducer from '../features/siteDataSlice.jsx'

export default configureStore({
    reducer: {
        siteData: siteDataReducer
    }
})