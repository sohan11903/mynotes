import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function CreateNote() {
  return (
    <>
        <div className='main_note'>
        <form>
            <input type='text' placeholder='Title'></input>
            <textarea rows="" column="" placeholder='Write a note.' ></textarea>
            <Button><AddIcon className="plus_sign"></AddIcon></Button>
        </form>

        </div>
    </>
  )
}
