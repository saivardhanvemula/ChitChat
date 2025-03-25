import React from 'react'
import { IconButton } from '@mui/material'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

export const CreateGroups = () => {
  return (
    <div className='createGroup-container'>
        <input type="text" placeholder='Enter the Group Name' className='search-box' />
        <IconButton>
            <DoneOutlineRoundedIcon/>
        </IconButton>
    </div>
  )
}
