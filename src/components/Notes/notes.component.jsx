import React, {useState} from 'react';
import'./notes.styles.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Notes(props){
    const [value, setValue] = useState('');

    
    return (
        <div className='notes'>
            <ReactQuill theme="snow" value={value} onChange={setValue}/>

        </div>
    );
}

export default Notes;