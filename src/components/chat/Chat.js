import ChatInfo from '../chatInfo/ChatInfo';
import ChatList from '../chatList/ChatList';
import ChatForm from '../chatForm/ChatForm';

import './chat.scss';




const Chat = () => {

    return (
        <div className="chat">
            <div className="chat_item-info">
                <ChatInfo />
            </div>
            <div className="chat_item-list">
                <ChatList />
            </div>
            <div className="chat_item-form">
                <ChatForm />
            </div>
        </div>
    )
}

export default Chat;