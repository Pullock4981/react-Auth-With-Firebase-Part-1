// import { getAuth, signInWithPopup } from "firebase/auth";
// import app from "../../Firebase/firebase.init";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";

// const Login = () => {
//     const auth = getAuth(app)
//     console.log(app);
//     const provider = new GoogleAuthProvider()

//     const handleSignIn = () => {
//         signInWithPopup(auth, provider)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//             })
//             .catch(error => {
//                 console.log('error', error.message);
//             })
//     }
//     return (
//         <div>
//             <button onClick={handleSignIn}>Google Login</button>
//         </div>
//     );
// };

// export default Login;

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState('')
    const auth = getAuth(app);
    console.log(app);
    const provider = new GoogleAuthProvider();

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser)
            })
            .catch((error) => {
                console.log("error", error.message);
            });
    };
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser('')
            })
            .catch(error => {
                console.error(error);
            })
    };

    return (
        <div>
            {
                user?
                <button onClick={handleSignOut}>SignOut</button>:
                <button onClick={handleSignIn}>Google Login</button>
            }
            <div>
                <h3>User: {user.displayName}</h3>
            </div>
        </div>
    );
};

export default Login;
