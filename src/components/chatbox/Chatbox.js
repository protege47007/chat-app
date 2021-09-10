import React from 'react';
import Composer from './components/Composer/InputMain';
import InboxMain from './components/inbox/InboxMain';

const Chatbox = () => {
  return (
    <div id="messageBox">
      <Composer />
      <InboxMain />
    </div>
  );
};

export default Chatbox;
