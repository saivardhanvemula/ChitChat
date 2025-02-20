import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const ConversationItem = () => {
  return (
    <div className='conItem'>
      <div className="dp"> <AccountCircleIcon/> </div>
      <div className="convDetails">
        <div className="name">Shiva</div>
        <div className="lastMsg">Hello</div>
      </div>
    </div>
  )
}
