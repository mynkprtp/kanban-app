import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import authUtils from '../../utils/authUtils';
import { Box } from '@mui/material';
import Loading from '../common/Loading';
import SideBar from '../common/Sidebar';
import {setUser} from '../../redux/features/userSlice'

function AppLayout() {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch()

    useEffect(()=>{
        const checkAuth = async () => {
            const user =  await authUtils.isAuthenticated();
            if(!user)
                navigate('/login')
            else{
                // SAVE USER
                dispatch(setUser(user))
                setLoading(false)
            }
        }
        checkAuth()
    },[navigate]);
  return (
    loading ? (
        <Loading fullHeight/>
    ) : (
        <Box sx={{
            display: 'flex',
        }}>
            <SideBar/>
            <Box sx={{
                flexGrow: 1,
                p: 1,
                width: 'max-content'
            }}>
                <Outlet/>
            </Box>
        </Box>
    )
  )
}

export default AppLayout