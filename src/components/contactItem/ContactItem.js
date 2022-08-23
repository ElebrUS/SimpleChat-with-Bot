import { useDispatch, useSelector} from 'react-redux';

import { personChanged } from '../person/personSlice';

import './contactItem.scss';

const ContactItem = ({name, icon, message, id}) => {
    
    const dispatch = useDispatch();
    const {activePerson} = useSelector(state => state.person);
    const [{ date, text }] = message.slice(-1);
    const newData = date.slice(0,10);

    let cName = 'contactItem';
    if(id === activePerson){
        cName += ' active';
    }else{
        cName = 'contactItem';
    }


    return (
        <div className={cName} onClick={()=> dispatch(personChanged(id))}>
            <div className="contactItem_img">
                <img src={icon} alt="Girl" />
            </div>
            <div className="contactItem_info">
                <h3 className="contactItem_info-title">{name}</h3>
                <div className="contactItem_info-message">{text}</div>
            </div>
            <div className="contactItem_date">{newData}</div>
        </div>
    )
}

export default ContactItem;