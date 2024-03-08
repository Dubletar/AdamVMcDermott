import ControlledForm from "./components/ControlledForm/ControlledForm";

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
    label: 'Age',
    type: 'number',
    placeholder: 'ex: Up',
    rules: {
      required: true,
      maxlength: 3
    }
  }
];

const App = () => {
  return (
    <div className="App">
      <h3>McDermott</h3>
      <ControlledForm formSchema={formSchema} />
    </div>
  );
}


export default App;
