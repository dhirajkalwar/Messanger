import { Children } from "react";

const Sidebar = async ({children} : {
    children: React.ReactNode;
}) => {
    return (
        <div>
           {children}
        </div>
    );
}

export default Sidebar;