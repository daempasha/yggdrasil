import React, { useState } from 'react';

import Notes from '../Notes/notes.component.jsx';

function PanelSwitcher(props){

    const switchFunction = (page) => {
        switch (page) {
            case 'Notes':
                return <Notes />
            case 'To-do':
                return <p>Todo</p>;;
            case 'Daily':
                return <p>Daily</p>;;
            case 'Deadlines':
                return <p>Deadlines</p>;;   
            case 'Reminder':
                return <p>Reminder</p>;;
            case 'Aspirations':
                return <p>Aspirations</p>;;                 
            default:
                return 'Help';
        }
    }


    return (
        <>
            {switchFunction(props.page)}
        </>
    )
    
}

export default PanelSwitcher;