import React from 'react';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function Note() {
  return (
    <>
        <div className='note'>
            <h1>Title</h1>
            <br/>
            <p>This is the content</p>
            <button className="btn">
            <DeleteOutlinedIcon />

            </button>
            
        </div>
    </>
  )
}
