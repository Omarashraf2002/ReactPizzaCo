import { Link } from "react-router-dom";
import Search from "../features/order/Search";
import UserName from "../features/user/UserName";

const Header = () => {
    return (
        <header className="bg-yellow-500 uppercase border-b border-stone-500 sm:px-6 flex items-center justify-between ">
            <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
            <Search />
            <UserName />
        </header >
    );
};

export default Header;