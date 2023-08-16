import React from 'react'; 
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import ChannelListContainer from './components/ChannelListContainer'; // Remove this line
import ChannelContainer from './components/ChannelContainer';

const apiKey = 'pb72s7nagt5a';

const client = StreamChat.getInstance(apiKey)

const app = () => {
    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer />
                <ChannelContainer />
            </Chat>
        </div>
    );
}

export default app;
