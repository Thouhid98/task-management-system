import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

// google 
import app from "../../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const Login = () => {
    const { signinUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // user SignIn firebase 
        signinUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfull',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

                e.target.reset();
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'warning!',
                    text: 'Invalid UserId or Password',
                    icon: 'warning',
                    confirmButtonText: 'Cool'
                })
            })

    }

      // Google 
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const handleGoogleSignIn = () => {
          signInWithPopup(auth, provider)
              .then(result => {
                  console.log(result.user);
                //   navigate(location?.state ? location.state : '/');
  
              })
              .catch(error => {
                  console.log(error);
              })
      }

    //   Github 
    // const auth = getAuth(app)

    const gitHubprovider = new GithubAuthProvider()
    const handleGithubSignIn = () =>{
        signInWithPopup(auth, gitHubprovider)
              .then(result => {
                  console.log(result.user);
                //   navigate(location?.state ? location.state : '/');
  
              })
              .catch(error => {
                  console.log(error);
              })

    }


    return (
        <div>
        <div className="flex ml-52 gap-8 mb-20 mt-20">
            <div className="">
                <img className="w-[400px] h-[350px] my-16" src="/login/login.svg" alt="" />
            </div>
            <div className="border lg:w-[500px] rounded-lg p-12 h-[570px]">
                <h2 className="text-4xl text-center my-4 text-[#444444] font-bold">Login</h2>
                <div>
                    <form onSubmit={handleLogin}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-medium">Email </span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-medium">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>

                        {/* <Link to='/login'> */}
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white">LogIn</button>
                        </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-base ml-40 text-center">Or Sign In with</a>
                            </label>                    
                    </form>

                    <div>
                    
                        <button onClick={handleGoogleSignIn} className="btn btn-outline bg-[#FF3811] text-white w-full mb-3 mt-3">
                            Google
                        </button>

                        <button onClick={handleGithubSignIn} className="btn btn-outline bg-gray-800 text-white w-full mb-3 mt-3">
                            Github
                        </button>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;