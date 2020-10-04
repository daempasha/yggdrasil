import React, {useState} from 'react';
import'./notes.styles.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { UPDATE_NOTES } from '../../redux/notes/notes.actions.js';
import { connect } from 'react-redux';


function Notes(props){

    
    return (
        <div className='notes'>
            <ReactQuill className='quill' theme="snow" value={props.notes} onChange={(notes) => props.dispatch(UPDATE_NOTES(notes))}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    notes: state.notes.notes
})

export default connect(mapStateToProps)(Notes);