import {AMBIL_DATA, AMBIL_PRODUCT, AMBIL_BERITA,ADD_POST, USER_REGISTER, USER_LOGIN, GET_TOKEN, AMBIL_MAPS,SESSION_RESTORING, SESSION_LOADING, SESSION_SUCCESS, SIGNUP_SUCCESS, SESSION_ERROR, SESSION_LOGOUT, SESSION_UPDATE, HASIL_CAM, INVEST } from '../types/'

import axios from 'axios';
import {Actions} from 'react-native-router-flux'
import {Alert ,AsyncStorage} from 'react-native';
import firebaseService from '../../enviroments/firebase'

// const apiUrl = 'https://reduxblog.herokuapp.com/api/posts';
// const apiPro = 'https://learn-rest.herokuapp.com/api/products';
// const apiLogin = 'http://api-museek.herokuapp.com/auth/login';
// const uploadImg = 'https://learn-rest.herokuapp.com/api/fire/user';
// const apiinvest = 'https://learn-rest.herokuapp.com/api/invest';
const apiMaps ='https://gist.githubusercontent.com/kikimaxs/bbf358e50a3614fd67f3c8b9a3500c4f/raw/30b4f43ac86676ba22c27b116de11d55c9929dd9/api.json';


export const restoreSession = () => dispatch => {
  dispatch(sessionLoading());
  dispatch(sessionRestoring());

  firebaseService.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(sessionSuccess(user));
    } else {
      dispatch(sessionLogout());
    }
  });
};

export const loginUser = (email, password) => dispatch => {
  dispatch(sessionLoading());

  firebaseService
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(sessionSuccess(user));
    })
    .catch(error => {
      dispatch(sessionError(error.message));
    });
};

export const signupUser = (email, password) => dispatch => {
  dispatch(sessionLoading());

  firebaseService
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(signupSuccess(user));
    })
    .catch(error => {
      dispatch(sessionError(error.message));
    });
};

export const logoutUser = () => dispatch => {
  dispatch(sessionLoading());

  firebaseService
    .auth()
    .signOut()
    .then(() => {
      dispatch(sessionLogout());
    })
    .catch(error => {
      dispatch(sessionError(error.message));
    });
};


export const updateUser = (displayName, photoURL) => dispatch => {
  // dispatch(sessionLoading());

  firebaseService
  .auth()
  .currentUser.updateProfile({displayName, photoURL})
  .then(user =>{
    dispatch(updateSuccess(user));
  })
  .catch(error =>{
    dispatch(sessionError(error.message))
  })
}

const updateSuccess = () =>({
  type: SESSION_UPDATE
});

const sessionRestoring = () => ({
  type: SESSION_RESTORING
});

const sessionLoading = () => ({
  type: SESSION_LOADING
});

const sessionSuccess = user => ({
  type: SESSION_SUCCESS,
  user
});

const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  user
});

const sessionError = error => ({
  type: SESSION_ERROR,
  error
});

const sessionLogout = () => ({
  type: SESSION_LOGOUT
});

export const ambilMap = (datas) =>{
    return {
        types:AMBIL_MAPS,
        datas
    }
}

export const ambilSemuaMaps = () =>{
    return(dispatch) =>{
        return axios.get(apiMaps)
        .then(res => {
            dispatch(ambilMap(res.data.datas))
        })
        .catch(err => {
            throw(err);
        })
    }
}

// export const uploadImgSuccess = (data) =>{
//   return {
//       types:HASIL_CAM,
//       payload:{
//           userImage:data.userImage,
//       }
//   }
// }


// export const uploadimg = (userfireImage) => {
//   return(dispatch) =>{
//     return axios.post(uploadImg,{
//           userfireImage
//       })
//       .then(res => {
//         dispatch(uploadImgSuccess(res.data))
//         console.log('cam',res.data)
//       })
//   }
// }


// export const createPostSuccess = (data) =>{
//     return {
//         types:ADD_POST,
//         payload:{
//             title:data.title,
//             categories:data.categories,
//             content:data.content
//         }
//     }
// }


// export const createpost = ({title, categories, content}) =>{
//     return(dispatch) =>{
//         return axios.post(apiUrl +'key=didik',
//         {title, categories, content})
//         .then(res => {
//             dispatch(createPostSuccess(res.data))
//             Actions.home()
//             alert('data add')
//         })
        
//     }
// }

// export const sendInvestSuccess = (data)=>{
//   return{
//     types:INVEST,
//     payload:{
//       photoURL:data.photoURL,
//       displayName:data.displayName,
//       email:data.email,
//       alamat:data.alamat,
//       noHp:data.noHp,
//       bank:data.bank,
//       jmlpembayaran: data.jmlpembayaran,
//       idProduct:data.idProduct
//       }
//   }
// }

// export const sendInvest = ({photoURL, displayName, email, alamat, noHp, bank, jmlpembayaran, idProduct}) =>{
// return(dispatch)=>{
//   return axios.post(apiinvest,
//     {photoURL, displayName, email, alamat, noHp, bank, jmlpembayaran, idProduct})
//     .then(res => {
//       dispatch(sendInvestSuccess(res.data))
//     })
//   }
// }



// export const ambilProduct = (products) =>{
//     return {
//         types:AMBIL_PRODUCT,
//         products
//     }
// }

// export const ambilSemuaProduct = () =>{
//     return(dispatch) =>{
//         return axios.get(apiPro)
//         .then(res => {
//             dispatch(ambilProduct(res.data.products))
//             console.log('ini product' (res.data.products))
//         })
//         .catch(err => {
//             throw(err);
//         })
//     }
// }


// export const ambilData = (posts) => {
//     return {
//       type: AMBIL_DATA,
//       posts
//     }
//   };
  
  
//   export const ambilSemuaData = () => {
//     return (dispatch) => {
//       return axios.get(apiPro)
//         .then(res => {
//           dispatch(ambilData(res.data.products))
//           console.log('tes',res.data.products)
//         })
//         .catch(error => {
//           throw(error)
//         });
//     };
//   };





//   export const ambilBerita = (beritas) => {
//     return {
//       type: AMBIL_BERITA,
//       beritas
//     }
//   };
  
  
//   export const ambilSemuaBerita = () => {
//     return (dispatch) => {
//       return axios.get(apiUrl+ '?key=kiki')
//         .then(res => {
//           dispatch(ambilBerita(res.data))
//           console.log(res.data)
//         })
//         .catch(error => {
//           throw(error)
//         });
//     };
//   };





// export const deleteDataSuccess = id => {
//     return {
//       type: DELETE_DATA,
//       payload: {
//         id
//       }
//     }
//   }
  
//   export const deleteData = id => {
//     return (dispatch) => {
//       return axios.delete(`${apiUrl}/${id}?key=didik`)
//         .then(res => {
//           dispatch(deleteDataSuccess(res.data));
//           console.log('coba', res.data)
//         })
//         .catch(error => {
//           throw(error)
//         })
//     }
//   }
  

//   export const userRegisterSuccess = (data) => {
//     return {
//         type: USER_REGISTER,
//         payload: {
//             id: data.id,
//             first_name: data.first_name,
//             last_name: data.last_name,
//             address: data.address,
//             email: data.email,
//             tlp: data.tlp,
//             password: data.password
//         }
//     }
// }
// export const userRegister = ({first_name, last_name, address, email, tlp, password}) => {
//     return(dispatch) => {
//         return axios.post('http://api-museek.herokuapp.com/signup',
//             {first_name, last_name, address, email, tlp, password}
//         )
//         .then(res => {
//             dispatch(userRegisterSuccess(res.data))
//             console.log('berhasil ga?', res.data)
//         })
//     }
// }

// export const userLoginSuccess = (data) => {
//     return {
//         type: USER_LOGIN,
//         payload: {
//             email: data.email,
//             password: data.password
//         }
//     }
// }
// export const userLogin = ({email, password}) => {
//     return(dispatch) => {
//         return axios.post(apiLogin,
//             {email, password}
//         )
//         .then(res => {
//             dispatch(userLoginSuccess(res.data))
//             console.log('masuk ga?', res.data)
//         })
//     }
// }

// export const getToken = (token)=>{
//     return{
//         type:GET_TOKEN,
//         token
//     }
// }

// export const getTokenSuccess =({email, password})=>{
//     return (dispatch)=>{
//         return axios.post(apiLogin,{
//             email, password
//         })
//         .then(res =>{
//             console.log('ini response login', res.data)
//             AsyncStorage.setItem('token', res.data.auth_token, () =>{
//                 AsyncStorage.getItem('token', (err, token) =>{
//                     console.log('ini token', token);
//                     dispatch(getToken(token))
                    
//                 });
//             });
//             if(res.data.status === 'OK'){
//                 Alert.alert('login sukses'),
//                 Actions.invest();
//             }
//             else(
                
//                 alert('login gagal')
//             )


//         })
//         .catch(err =>{
//             throw(err)
//         })
//     }
// }
