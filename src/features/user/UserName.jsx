import { useSelector } from "react-redux";

const UserName = () => {

 const username=   useSelector(state => state.user.username)
    return (
        <div className="text-sm font-semibold hidden md:block">
            {username}
        </div>
    );
};

export default UserName;