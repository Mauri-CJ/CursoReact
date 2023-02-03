import { Box } from '@mui/system'
import React from 'react'
import { NavBar, SideBar } from '../components'

const drawerWidth= 240

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        {/* NavBar */}
        <NavBar drawerWidth={drawerWidth}/>

        {/* SideBar */}
        <SideBar drawerWidth={drawerWidth}/>
        
        <Box
            component = 'main'
            sx={{flexGrow:1,p:11}}
        >
            {children}
        </Box>

    </Box>
  )
}
