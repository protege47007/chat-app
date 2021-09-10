import React from 'react';
import Timeline from './timeline';
import Receiver from './Receiver';
import Sender from './Sender';


const InboxMain = ()=>{
    return(
        <div className="message-column">
            <Timeline />
            <Receiver />
            <Sender />
        </div>
    );
}

export default InboxMain;