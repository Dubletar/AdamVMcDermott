import { useDispatch, useSelector } from "react-redux";
import { useRef } from 'react';
import { addName } from "../../store/reducer/nameSlice";
import useNamesHook from "../../hooks/NamesHook";

const NameForm = () => {
    // const names = useSelector(state => state.name);
    const fName = useRef();
    const lName = useRef();
    const dispatch = useDispatch();
    const [ names, setNames ] = useNamesHook();

    const handleSubmit = () => {
        const firstName = fName.current.value.trim();
        const lastName = lName.current.value.trim();

        if (firstName && lastName) {
            // dispatch(addName({ firstName, lastName }));
            setNames([...names, { firstName, lastName }]);
            fName.current.value = '';
            lName.current.value = '';
        }
    }
    return (<>
        <div>
            <input ref={fName} type='text' name='firstName' />
        </div>
        <div>
            <input ref={lName} type='text' name='lastName' />
        </div>
        <div>
            <button type='button' name='submit' onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            { names && names.length > 0 && names.map(n => {
                return <div>{n.firstName} {n.lastName}</div>
            })}
        </div>
    </>)
}

export default NameForm;