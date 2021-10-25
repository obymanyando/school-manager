import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import WorkshopContextProvider from './contexts/WorkshopContext'
import GroupworkContextProvider from './contexts/GroupWorkContext';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './components/Firebase';
import BlogContextProvider from "./contexts/BlogContext";
import CommentContextProvider from './contexts/CommentsContext';
import MaterialsContextProvider from "./contexts/MaterialsContext";
import AuthContextProvider from "./contexts/AuthContext";
import UsersContextProvider from './contexts/UsersContext';

ReactDOM.render(
  // <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <WorkshopContextProvider>
          <MaterialsContextProvider>
            <GroupworkContextProvider>
              <BlogContextProvider>
                <CommentContextProvider>
                    <AuthContextProvider>
                      <UsersContextProvider>
                        <App />
                      </UsersContextProvider>
                    </AuthContextProvider>
                </CommentContextProvider>
              </BlogContextProvider>
            </GroupworkContextProvider>
          </MaterialsContextProvider>
      </WorkshopContextProvider>
    </FirebaseContext.Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
