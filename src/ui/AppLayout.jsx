import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {
    const navigation = useNavigation()
    const isLoading = navigation.state === "isLoading"

    return (
        <div className=" grid grid-rows-[auto_1fr_auto] h-screen" >
            {/* {isLoading && <Loader />} */}
            {isLoading && <Loader />}
            <Header />
            <div className="overflow-scroll ">

            <main className="max-w-3xl mx-auto ">
               
                    Content
                    <Outlet />
               
            </main>
            </div>
            <CartOverview />
        </div>
    );
};

export default AppLayout;