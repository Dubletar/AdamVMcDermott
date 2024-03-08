# Adam Velma - McDermott

---
To run the application: 
```
$ git clone git@github.com:Dubletar/AdamVMcDermott.git
$ cd AdamVMcDermott
$ npm i
$ npm start
```
---

## Dynamic Form Demo

I am providing this example, written this morning, because we ran out of time during the interview for how I wanted to answer the question of dynamic fields from data (an array of objects).

My approach was to dynamically build the fields by mapping the key data and values, for a specific reason. However, due to limited time, I had to provide the simple answer of mapping the data directly and rendering inputs. In my opinion, that is not the way to render dynamic forms. This example provides the full example of how I would and have rendered dynamic forms. 

Of course, this example is not all encompassing, but it does allow a great visualization into my thought process. 

Thank you for your time. 

### Included
* Fully dynamic, componentized, and controlled input field generation from data keys.
* Dynamic input field rules based on data provided.
* Error state and handling, based on the rules. (Right now the only rule that creates an error is empty fields, required is true).
* Form handling errors and values sent from input fields.

### Example Data
```
const formSchema = [
  { 
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    placeholder: 'ex: Never',
    rules: {
      required: true,
      maxlength: 20
    }
  },
  { 
    name: 'middleName',
    label: 'Middle Name',
    type: 'text',
    placeholder: 'ex: Gonna',
    rules: {
      required: true,
      maxlength: 20
    }
  },
  { 
    name: 'nickName',
    label: 'Nick Name',
    type: 'text',
    placeholder: 'ex: Give',
    rules: {
      required: true,
      maxlength: 20
    }
  },
  { 
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    placeholder: 'ex: You',
    rules: {
      required: true,
      maxlength: 20
    }
  },
  { 
    name: 'age',
    label: 'Age (ex: 25)',
    type: 'number',
    placeholder: 'ex: Up',
    rules: {
      required: true,
      maxlength: 3
    }
  }
];
```

### Screenshot of loaded form
![image](https://github.com/Dubletar/AdamVMcDermott/assets/13546530/a28ad8e3-a6dc-4e1b-9539-107071779473)

### Screenshot of error handling
![image](https://github.com/Dubletar/AdamVMcDermott/assets/13546530/6677c7e2-d162-4811-b3f6-aba3aa6149d1)

### Screenshot of console error
![image](https://github.com/Dubletar/AdamVMcDermott/assets/13546530/6920cf44-657a-4600-bcd3-8f0450836d6b)
