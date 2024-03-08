

/*
Implement a component DynamicForm that takes a schema describing a list of fields (name, label, and type) and dynamically generates a form. The form should display a submit 
   button that logs the form values to the console when clicked.
   */

// schema = [{ name: 'Whatever', label: 'whatever', type: 'whatever' }];
const DynamicForm = ({ data }) => {
    const [ collected, setCollected ] = useState(null);

    const handleSubmit = e => {
        console.log(e)
    };

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        const thisCollected = { [name]: name, value };
        const newState = { ...collected,  ...thisCollected }
        setCollected(newState);
    };

    useEffect(() => {
        buildFormData(data);
    }, []);

    return (<>
        <Form onSubmit>
          { data && data.map(a => {
            return (
                <input onChange={handlChange} type={a.type} name={a.name} value = '' />
            );
            })}  
            <button type='button'>Submit</button>
        </Form>
    </>)
}