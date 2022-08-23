import { useSelector } from 'react-redux';

import { useGetOnePersonQuery} from '../../api/apiSlice';
import ChatListItem from '../chatListItem/ChatListItem';

import Spinner from '../spinner/Spinner';


const ChatList = () => {

    const { activePerson } = useSelector(state => state.person);

    const {
        data,
        isLoading,
        isError
    } = useGetOnePersonQuery(activePerson);

    if (isLoading) {
        return <Spinner />;
    } else if (isError) {
        return <h5 >Ошибка загрузки</h5>
    }

    const renderItemList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Contact not found</h5>
        }

        return arr.map(({...props}, i) => {
            return <ChatListItem key={i} {...props} />
        })
    }

    const items = renderItemList(data.message);
    
    return (
        <ul className="chatList">
            {items}
        </ul>
    )
}

export default ChatList;