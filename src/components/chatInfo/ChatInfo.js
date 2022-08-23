import { useSelector } from 'react-redux';

import { useGetOnePersonQuery} from '../../api/apiSlice';

import Spinner from '../spinner/Spinner';
import './chatInfo.scss';

const ChatInfo = () => {

    const { activePerson } = useSelector(state => state.person);

    const {
        data: person = [],
        isLoading,
        isError
    } = useGetOnePersonQuery(activePerson);
    
    const {name, icon} = person;

    if (isLoading) {
        return <Spinner />;
    } else if (isError) {
        return <h5 >Ошибка загрузки</h5>
    }

    return(
        <div className="chatInfo">
            <div className="chatInfo_img">
                <img src={icon} alt="" />
            </div>
            <h3 className='chatInfo_title' >{name}</h3>
        </div>
    )
}
export default ChatInfo;