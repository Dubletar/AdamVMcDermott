import { useMenuContext, MenuContext } from "../../context/NavMenuContext";
import { useState } from 'react';
import NavMenuGroup from "./NavMenuGroup";

const NavMenu = () => {
    const { data, defaultSelected } = useMenuContext();
    const [ selected, setSelected ] = useState(defaultSelected);

    const buildMenu = () => {
        const groups = data.map(g => {
            const name = Object.keys(g)[0];
            const groupData = Object.values(g)[0];

            return (<NavMenuGroup groupName={name} groupData={groupData} />);
        });

        return groups;
    }

    return (
        <MenuContext.Provider value={{ data, selected, setSelected }}>
        <div className='navMenu'>
            { buildMenu() }
        </div>
        </MenuContext.Provider>
        
    )
}

export default NavMenu;