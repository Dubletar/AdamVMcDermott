import { useEffect, useState } from 'react';
import styles from './formfield.module.scss';
import classNames from 'classnames';

const FormField = ({
    schema = {},
    onChange = () => {},
    onBlur = () => {},
    onFieldError = () => {}
}) => {
    const [ fieldValue, setFieldValue ] = useState('');
    const [ hasError, setHasError ] = useState('');
    const classes = classNames(
        { [styles.hasError]: hasError },
        styles.input
    );

    const notUndefined = test => typeof test !== 'undefined';
    const rulesDefined = () => notUndefined(schema.rules);

    const catchMaxLength = (input, maxlength) => {
        return input.length >= maxlength;
    };
    const catchNonNumeric = input => {
        if (input.trim() !== '') {
            const pattern = /^[0-9]+$/;
            return !pattern.test(input);
        }
        
        return false;
    };
    
    const ruleCatchLength = (input, rules) => notUndefined(rules.maxlength) && catchMaxLength(input, rules.maxlength);

    const validateTextInput = input => {
        if (!(rulesDefined)) {
            return true;
        }

        const rules = schema.rules;
        if (ruleCatchLength(input, rules)) {
            return false;
        }

        return true;
    };

    const validateNumericInput = input => {
        if (!(rulesDefined)) {
            return true;
        }

        const rules = schema.rules;
        if (ruleCatchLength(input, rules) || catchNonNumeric(input)) {
            return false;
        }

        return true;
    };

    const validateInput = input => {
        if (!(rulesDefined)) {
            return true;
        }

        return schema.type === 'text' 
            ? validateTextInput(input)
            : validateNumericInput(input);
    };

    const handleError = isError => {
        setHasError(isError);
        onFieldError({ error: isError, field: schema.name });
    };

    const handleBlur = e => {
        e.preventDefault();

        if (schema?.rules?.required && (!fieldValue || fieldValue === '')) {
            handleError(true);
            console.log('error');
        } else if (hasError) {
            handleError(false);
            console.log('error cleared');
        }

        onBlur(e);
    };

    const handleChange = e => {
        e.preventDefault();
        const value = e.target.value;
        const isValidated = validateInput(value);

        if (isValidated) {
            setFieldValue(value);
            onChange({ field: schema.name, value });

            if (hasError) {
                handleError(false);
            }
        }
    };

    const isAllowedAttribute = parameter => {
        const allowedAttributes = [
            'name', 'label', 'value', 'id', 'placeholder', 'title', 'pattern', 'required'
        ];

        return typeof parameter == 'string' &&
            allowedAttributes.indexOf(parameter.toLowerCase()) > -1;
    };

    const keyInSchema = param => {
        const keys = Object.keys(schema);
        return keys.indexOf(param) > -1;
    };

    const buildFieldFromSchema = () => {
        if (!keyInSchema('type') || !keyInSchema('name')) return;

        const schemaKeys = Object.keys(schema);
        const fieldParameters = {};
        
        // Build general attributes
        schemaKeys.forEach(param => {
            const isAllowed = isAllowedAttribute(param);
            if (isAllowed) {
                fieldParameters[param] = schema[param];
            }
        });

        // Make sure to limit input if numeric type. 
        if (schema.type === 'number' && !keyInSchema('pattern')) {
            fieldParameters.pattern = "[0-9]*";
        }
        
        return <input 
            {...fieldParameters}
            className={classes}
            value={fieldValue}
            type='text'
            onChange={handleChange}
            onBlur={handleBlur} />
    };

    const handleDefaultValue = () => {
        if (keyInSchema('type') && keyInSchema('value')) {
            setFieldValue(schema.value);
        }
    };

    useEffect(() => {
        handleDefaultValue();
    });

    useEffect(() => {
        console.log(classes);
    }, [classes]);

    return (
        <div className={styles.container}>
            { buildFieldFromSchema() }
        </div>
    );
}

export default FormField;