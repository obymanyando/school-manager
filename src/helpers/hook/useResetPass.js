import { useState } from 'react';

const useForgetPass = (firebase) => {
    const initialState = {
      email: '',
      error: null,
      message: ''
    }
    const [users, setUsers] = useState(initialState);
    
    const handleSubmit = (event) => {
      const { email } = users;
      if (event) {
        event.preventDefault();
      }
      firebase
        .doPasswordReset(email)
        .then(() => {
            setUsers({ ...users, message: `We sent an email to ${email} with link to reset password`});
        })
        .catch(error => {
            setUsers({ error });
        });
        setUsers(initialState);
    }
    const handleChange = (event) => {
      event.persist();
      setUsers({ [event.target.name]: event.target.value });
    }
    return {
      handleSubmit,
      handleChange,
      users
    };
  }

  export default useForgetPass;
