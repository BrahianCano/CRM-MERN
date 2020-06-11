import React, { useState, useEffect, Fragment } from 'react';

// Importar Auth de Google Firebase //
import 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire';

// Hooks imports //
import UseApi from '../hooks/UseApi';

const LogInClient = () => {
     const firebase = useFirebaseApp();
     const User = useUser();

     const [userData, setUserData] = useState({});
     const { result, error, ApiFunction } = UseApi('POST', 'http://localhost:4000/usuarios', userData);


     useEffect(() => {
          if (User)
               setUserData({
                    tokenGoogle: User.uid,
                    email: User.email,
                    image: User.photoURL
               })
     }, [])

     
     const handleAuthGoogle = async (event) => {
          event.preventDefault();
          const provider = new firebase.auth.GoogleAuthProvider();
          await firebase.auth().signInWithPopup(provider)
               .then(result => {
                    setUserData({
                         tokenGoogle: result.user.uid,
                         email: result.user.email,
                         image: result.user.photoURL
                    });
                    if (result.additionalUserInfo.isNewUser !== false) ApiFunction();
               })
               .catch(err => console.log(err.message));
     }

     const handleSignOutGoogle = async () => {
          await firebase.auth().signOut()
               .then(() => console.log('Cerraste sesion con exito.'))
               .catch((error) => console.log('Hubo un error: ' + error))
     }

     if (error) console.log(error);
     if (result.data) console.log(result.data);

     return (
          <div className="d-flex justify-content-center text-center">
               <section>
                    <form onSubmit={handleAuthGoogle} className="mt-5" style={{ width: '280px' }} >
                         <h1 className="h3 font-weight-normal">Inicia sesion con Google</h1>
                         {
                              User &&
                              <Fragment>
                                   <img className="mb-4 " src={userData.image} alt="" width="72" height="72" />
                                   <h6>Correo: {userData.email}</h6>
                                   <h6>Token: {userData.tokenGoogle}</h6>
                              </Fragment>
                         }
                         <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign in Google</button>
                    </form>
                    <div style={{ width: '280px' }}>
                         <button className="btn btn-lg btn-primary btn-block mt-3" onClick={handleSignOutGoogle} >Sign out</button>
                    </div>
               </section>
          </div>

     );
}

export default LogInClient;