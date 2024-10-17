
/* eslint-disable react/prop-types*/

import { Link } from "react-router-dom";

const base = "bg-yellow-400 px-4 py-3 inline-block tracking-wide text-stone-700 rounded-full hover:bg-yellow-200 uppercase font-semibold focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"

const styles = {
    primary: base + 'px-4 py-3 sm:px-6 sm:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs ',
    rounded: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm ',
    secondary: " border-2 border-stone-300 px-4 py-3 sm:px-6 sm:py-4 inline-block tracking-wide text-stone-700 rounded-full hover:bg-stone-300 hover:text-stone-500 uppercase font-semibold focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed"
}

const Button = ({children,disabled,to, type, onClick}) => {
    if(to) return <Link to={to} className={styles[type]}>{children}</Link>
    if(onClick) return <button onClick={onClick} disabled={disabled} className={styles[type] }>{children}</button>


    return (
        <button disabled={disabled} className={styles[type]} >
            {children}
        </button>
    );
};

export default Button;