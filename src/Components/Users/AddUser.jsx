import { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredage, setenteredage] = useState("");
  const [error,setError]=useState();

  const AddUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredage.trim().length === 0) {
        setError({
            title:'Invalid input',
            message:'Please enter a Valid name and age .'
        });
      return;
    }
    if (+enteredage < 1) {
        setError({
            title:'Invalid age',
            message:'Please enter a Valid age(> 0) .'
        });
      return;
    }

    props.onAddUser(enteredUserName, enteredage);
    setenteredUserName("");
    setenteredage("");
  };

  const usernameChangeHandler = (event) => {
    setenteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setenteredage(event.target.value);
  };

  const errorHandler=()=>{
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />}
      <Card cN={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Userame</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredage}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
