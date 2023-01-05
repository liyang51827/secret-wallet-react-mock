import { FaArrowUp, FaQuestionCircle } from 'react-icons/fa';
import Div from './Div';

const Item = props => {
    const { data, index } = props;
    return (
        <Div className='text-white p-3 mb-5 item' key={index}>
            <p className='text-gray'>{data.title} <FaQuestionCircle /></p>
            <h3 >{data.value}</h3>
            <Div className="d-flex align-items-center" style={{ gap: '0.5rem' }}><FaArrowUp /> {data.underVal}</Div>
        </Div>
    )
}

export default Item;