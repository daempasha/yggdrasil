import React, {useState} from 'react';
import 'draft-js/dist/Draft.css';
import'./notes.styles.scss';
import { Editor, EditorState } from 'draft-js';

function Notes(props){
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    
    return (
        <div className='notes'>
            <h1>Simply notes</h1>
            <p>Here's a place to just write anything on your mind. Book ideas? Dream journal? Something you just remembered? Use this as your own personal notebook.</p>
            
            <div className='editor'>
                <Editor editorState={editorState} onChange={setEditorState}/>

            </div>
        </div>
    );
}

export default Notes;