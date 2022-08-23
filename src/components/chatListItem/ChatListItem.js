import './chatListItem.scss';

const ChatListItem = ({ text, date, sender}) => {

    return (
        <div className="chatListItem">
            {sender === 'me' ? (
                <div className='chatListItem_flex-me'>
                    <div className='chatListItem_me'>
                        {text}
                    </div>
                    <div className='chatListItem_date'>{date}</div>
                </div>
            ) : (
                <div className='chatListItem_flex-other'>
                    <div className='chatListItem_other'>
                        {text}
                    </div>
                    <div className='chatListItem_date'>{date}</div>
                </div>
            )}
        </div>
    )
}
export default ChatListItem;