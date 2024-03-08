import { useEffect, useState } from 'react';
import FormField from "../FormField/FormField";
import styles from './form.module.scss';

const ControlledForm = ({ formSchema = [] }) => {
    const [ errorObj, setErrorObj ] = useState({});
    const [ values, setValues ] = useState({});

    const handleError = obj => {
        if (obj.error) {
            setErrorObj({ ...errorObj, ...{ [obj.field]: true }});
        } else {
            const errors = { ...errorObj };
            delete errors[obj.field];
            setErrorObj(errors);
        }
    };

    const handleChange = obj => {
        setValues({ ...values, [obj.field]: obj.value });
    };

    const handleSubmit = () => {
        console.log('form values', values);
    };

    useEffect(() => {
        console.log('form errors', errorObj);
    }, [errorObj]);

    const buildFieldFromSchema = () => {
        return formSchema.map((obj, key) => {
            let field;

            if (obj?.type) {
                switch(obj.type) {
                    case 'text':
                    case 'number':
                        field = (<FormField key={key} schema={obj} onFieldError={handleError} onChange={handleChange}/>);
                        break;
                    default:
                        return;
                }
            }

            return (
                <div className={styles.fieldContainer}>
                    { obj?.label && <label className={styles.label}>{ obj.label }</label> }
                    { field }
                </div>
            );
        });
    };

    return (<>
        <form className={styles.form}>
            { buildFieldFromSchema() }
        </form>
        <button type='button' name='submit' onClick={handleSubmit}>Submit</button>
        <div>Output: { JSON.stringify(values) }</div>
    </>);
};

export default ControlledForm;