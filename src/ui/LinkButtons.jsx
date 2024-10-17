/* eslint-disable react/prop-types*/

import { Link, useNavigate } from "react-router-dom";


const LinkButtons = ({children, to}) => {
    const navigate = useNavigate();
    const className = "text-sm text-blue-500 hover:text-blue-900"
    if(to ==='-1') return <button onClick={() => navigate(-1)} className={className}>{children}</button>

    return (
        <div>
            <Link to={to}>
            {children}
            </Link>
        </div>
    );
};

export default LinkButtons;