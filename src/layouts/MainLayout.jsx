import React, { useEffect } from 'react'

import { Outlet } from "react-router-dom"
import Header from '../components/Header'

import { useSelector, useDispatch } from 'react-redux'
import { getSiteData } from "../redux/features/siteDataSlice"

const MainLayout = () => {

    const siteData = useSelector(state => state.siteData.value)
    const siteDataIsLoading = useSelector(state => state.siteData.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSiteData())
    }, [])

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default MainLayout