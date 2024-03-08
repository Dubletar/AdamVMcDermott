import { createContext, useContext } from "react";

/* [
     { menuText: [{ optionText: optionUrl }] }
    ]
*/
export const MenuContext = createContext({
    data : [{ 'main': [{ 'main': '/' }, { 'home': '/' }, { 'other': '/other' }]}],
    defaultSelected: 'main',
    setSelected: () => {}
});

export const useMenuContext = () => useContext(MenuContext);