import {useState, useContext, useEffect} from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { UsersContext } from "../../contexts/UsersContext";

const useSignUpForm = (firebase) => {
  const initialState = {
    userName: '',
    email: '',
    password: '',
    repassword: '',
    error: null
  }
  const { userEmail, getAllEmail } = useContext(UsersContext);
  const [users, setUsers] = useState(initialState);
  const [message, setMessage] = useState(null);
  
  useEffect(() => {
    getAllEmail();
  }, [])

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { userName, email, password } = users;
    const db = firebase.cloudDB;
    const userArr = userEmail.filter((item) => (item.fields.email === email))

    if (userArr.length !== 0) {
      firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return db.collection('Users').doc(authUser.user.uid)
          .set({
            userName,
            email,
          });
      })
      .then(() => {
        return firebase.doSendEmailVerification();
      })
      .then(() => {
        setUsers({ ...users});
        history.replace(from);
      })
      .catch(error => {
        setUsers({ error });
      })
    
    } else {
        setMessage('Email not found. Sign up is for Happy Readers members only');
      }
    setUsers(initialState);
  }

  const handleChange = (event) => {
    event.persist();
    if (message) {
      setMessage('');
    }
      setUsers(users => ({ ...users, [event.target.name]: event.target.value}));  
  }
  return {
    handleSubmit,
    handleChange,
    users,
    message
  };
}

export default useSignUpForm;