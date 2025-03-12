// import React from 'react'
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// export const ConversationItem = () => {
//   return (
//     <div className='conItem'>
//       <div className="dp"> <AccountCircleIcon/> </div>
//       <div className="convDetails">
//         <div className="name">Shiva</div>
//         <div className="lastMsg">Hello</div>
//       </div>
//     </div>
//   )
// }

import React from 'react'

export const ConversationItem = ({props}) => {
  return (
    <div className='conversation-container'>
      <p className="con-icon">{props.name[0]}</p>
      <p className="con-title">{props.name}</p>
      <p className="con-lastMessage">{props.lastMessage}</p>
      <p className="con-timeStamp">{props.timeStamp}</p>
    </div>
  )
}
