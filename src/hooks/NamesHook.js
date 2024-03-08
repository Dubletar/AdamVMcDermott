import { useState } from 'react';

const useNamesHook = () => {
    const [ names, setNames ] = useState([]);

    return [names, setNames];
}

export default useNamesHook;