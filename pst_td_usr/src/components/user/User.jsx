import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../store/apiSlice';
import Loading from '../messages/Loading';
import Error from '../messages/Error';
import UserDataList from './UserDataList';
import UserButtons from './UserButtons';
import './user.sass';
import BackButton from '../backbutton/BackButton';
import UserTitle from '../usertitle/UserTitle';

const User = () => {
    const { id } = useParams();
    const { data = [], isLoading, isError, isSuccess } = useGetUserQuery(id);
    console.log(data);

    if (isLoading) return <Loading />;
    if (isError) return <Error />;
    if (isSuccess) {
        return (
            <div className="user-profile">
                <BackButton />
                <UserTitle id={id} />
                <UserDataList
                    email={data.email}
                    phone={data.phone}
                    addressSuite={data.address.suite}
                    addressStreet={data.address.street}
                    addressCity={data.address.city}
                    addressZipCode={data.address.zipcode}
                    website={data.website}
                />
                <UserButtons id={id} />
            </div>
        );
    }
};

export default User;
