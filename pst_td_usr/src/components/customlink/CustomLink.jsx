import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, handler }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link
            to={to}
            className={match ? `${'nav-link'} + ${'active'}` : 'nav-link'}
            onClick={handler}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
