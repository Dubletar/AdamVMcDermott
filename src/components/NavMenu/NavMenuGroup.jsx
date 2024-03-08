import { useState, useEffect } from "react";
import { useMenuContext } from "../../context/NavMenuContext"


const NavMenuGroup = ({ groupName, groupData }) => {
    const { selected, setSelected } = useMenuContext();
    const [ trueList, setTrueList ] = useState([]);

    const buildList = () => {
        const list = groupData.filter(i => Object.keys(i)[0] != selected );
        setTrueList(list);
    }

    const handleClick = (e, name) => {
        e.preventDefault();
        setSelected(name);
    }

    const buildListElements = list => {
        return list.map(l => {
            const url = Object.values(l)[0];
            const name = Object.keys(l)[0];

            return (
                <a href={url} onClick={e => handleClick(e, name)}>
                    <div>{`${name}`}</div>
                </a>
            )
        });
    }

    useEffect(() => {
        buildList();
    }, [selected]);

    return (
        <div>
            <div>{`${selected}`}</div>
            { buildListElements(trueList) }
        </div>
    )
}

export default NavMenuGroup;