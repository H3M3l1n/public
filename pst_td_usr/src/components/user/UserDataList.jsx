import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faLocationDot,
    faShareNodes,
} from '@fortawesome/free-solid-svg-icons';

const UserDataList = ({
    email,
    phone,
    addressSuite,
    addressStreet,
    addressCity,
    addressZipCode,
    website,
}) => {
    return (
        <ul className="user-data">
            <li className="user-item user-data-email">
                <FontAwesomeIcon icon={faEnvelope} className="user-data-icon" />
                <div className="user-data-text">
                    <p className="user-data-value">{email}</p>
                    <p className="user-data-name">Email</p>
                </div>
            </li>
            <li className="user-item user-data-mobile">
                <FontAwesomeIcon icon={faPhone} className="user-data-icon" />
                <div className="user-data-text">
                    <p className="user-data-value">{phone}</p>
                    <p className="user-data-name">Phone</p>
                </div>
            </li>
            <li className="user-item user-data-work">
                <FontAwesomeIcon
                    icon={faLocationDot}
                    className="user-data-icon"
                />
                <div className="user-data-text">
                    <p className="user-data-value">
                        {addressSuite} {addressStreet}
                        <br />
                        {addressCity}, {addressZipCode}
                    </p>
                    <p className="user-data-name">Work</p>
                </div>
            </li>
            <li className="user-item user-data-social">
                <FontAwesomeIcon
                    icon={faShareNodes}
                    className="user-data-icon"
                />
                <div className="user-data-text">
                    <p className="user-data-value">{website}</p>
                    <p className="user-data-name">Website</p>
                </div>
            </li>
        </ul>
    );
};

export default UserDataList;
