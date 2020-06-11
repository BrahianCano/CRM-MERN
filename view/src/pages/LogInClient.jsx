import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

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
                    name: User.additionalUserInfo.profile.name,
                    email: User.email,
                    picture: User.photoURL,
                    provider: User.additionalUserInfo.providerId,
                    verified_email: User.additionalUserInfo.profile.verified_email,
                    uid: User.user.uid,
                    access_token: User.credential.accessToken,
                    
               })
     }, [])


     const handleAuthGoogle = async (event) => {
          event.preventDefault();
          const provider = new firebase.auth.GoogleAuthProvider();
          await firebase.auth().signInWithPopup(provider)
               .then(res => {
                    setUserData({
                         name: res.additionalUserInfo.profile.name,
                         email: res.user.email,
                         picture: res.user.photoURL,
                         provider: res.additionalUserInfo.providerId,
                         verified_email: res.additionalUserInfo.profile.verified_email,
                         uid: res.user.uid,
                         access_token: res.credential.accessToken
                    })
                    console.log(res)
                    try {
                         const response = axios({
                              method: 'POST', url: 'http://localhost:4000/usuarios', data: {
                                   name: res.additionalUserInfo.profile.name,
                                   email: res.user.email,
                                   picture: res.user.photoURL,
                                   provider: res.additionalUserInfo.providerId,
                                   verified_email: res.additionalUserInfo.profile.verified_email,
                                   uid: res.user.uid,
                                   access_token: res.credential.accessToken
                                   
                              }
                         });
                         if (response.status !== 200) throw new Error(response.statusText);
                         console.log('RESPUESTA DE MONGO', response)
                    } catch (err) {
                         console.log(err.message);
                    }
                    //console.log('RESPUESTA DE LA PROMESA DE GOOGLE ', res)
                    //console.log('ESTADO DE LA DATA ', userData)
                    //ApiFunction();
               })
               .catch(err => console.log(err.message));
     }



     const handleSignOutGoogle = async () => {
          await firebase.auth().signOut()
               .then(() => console.log('Cerraste sesion con exito.'))
               .catch((error) => console.log('Hubo un error: ' + error))
     }

     //if (error) console.log(error);
     //if (result) console.log('RESPUESTA DE USEAPI ', result);

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
                         <button className="btn btn-lg btn-primary btn-block mt-3" onClick={handleAuthGoogle} type="submit">Sign in Google</button>
                    </form>
                    <div style={{ width: '280px' }}>
                         <button className="btn btn-lg btn-primary btn-block mt-3" onClick={handleSignOutGoogle} >Sign out</button>
                    </div>
               </section>
          </div>

     );
}

export default LogInClient;


