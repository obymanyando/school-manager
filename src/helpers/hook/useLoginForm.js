import { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";

const useLoginForm = (firebase) => {
    const initialState = {
      userName: '',
      email: '',
      password: '',
      error: null
    }
    const [users, setUsers] = useState(initialState);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const handleSubmit = (event) => {
      const { email, password} = users;
      if (event) {
        event.preventDefault();
      }
      firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
            setUsers({ ...users});
            history.replace(from);
        })
        .catch(error => {
            setUsers({ error });
        });
        setUsers(initialState);
    }
    const handleChange = (event) => {
      event.persist();
      setUsers(users => ({ ...users, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleChange,
      users
    };
  }

  export default useLoginForm;