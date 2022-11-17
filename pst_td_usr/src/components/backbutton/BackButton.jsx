import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './backbutton.sass';

const BackButton = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div className="back-button">
            <button onClick={goBack} className="back-button-item">
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="back-button-icon"
                />
                Back
            </button>
        </div>
    );
};

export default BackButton;
