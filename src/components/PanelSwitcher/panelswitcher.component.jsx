import React from 'react';

function PanelSwitcher(props){
    const switchFunction = (page) => {
        switch (page) {
            case 'notes':
                return <p>Notes</p>;
            case 'todo':
                return <p>Todo</p>;;
            case 'daily':
                return <p>Daily</p>;;
            case 'deadlines':
                return <p>Deadlines</p>;;   
            case 'reminder':
                return <p>Reminder</p>;;
            case 'aspirations':
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