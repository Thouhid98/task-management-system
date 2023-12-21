import { useContext } from "react";
import {AuthContext} from '../../Providers/AuthProvider'
import Swal from "sweetalert2";


const Register = () => {
    const {createUser}= useContext(AuthContext)

    const handleSignUp = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

          // password validation 
          if (password.length < 6) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please enter atlest  six charecters!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            return;
        }

       

        //Old code createUser firebase 
        createUser(email, password)
        .then(data =>{
            console.log(data);
            Swal.fire({
                title: 'Success!',
                text: 'SignUp Successfull',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              e.target.reset();
        })
        .catch(error =>{
            console.log(error);
        })

        // New code 
        // createUser(email, password)
        // .then(result =>{
        //     console.log(result.user);
            
            
        //     const user = { email }
        //     fetch('https://b8a11-server-side-seven.vercel.app/user', {
        //         method:'POST',
        //         headers:{
        //             'content-type': 'application/json'
        //         },
        //         body:JSON.stringify(user)
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         Swal.fire({
        //             title: 'Success!',
        //             text: 'SignUp Successfull',
        //             icon: 'success',
        //             confirmButtonText: 'Cool'
        //           })
        //         e.target.reset();                 
        //     })
        // })
        // .catch(error =>{
        //     console.log(error);
        //     Swal.fire({
        //         title: 'warning!',
        //         text: 'Try Different Email',
        //         icon: 'warning',
        //         confirmButtonText: 'Cool'
        //     })
        // })

    }

    return (
        <div>
        <div className="flex ml-52 gap-8 mb-20 mt-20">
            <div className="">
                <img className="w-[400px] h-[350px] my-16" src="/login/login.svg" alt="" />
            </div>
            <div className="border lg:w-[500px] rounded-lg p-12 h-[500px]">
                <h2 className="text-4xl text-center my-4 text-[#444444] font-bold">SignUp</h2>
                <div>
                    <form onSubmit={handleSignUp}>

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
                            <button className="btn bg-[#FF3811] text-white">signup</button>
                        </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-base ml-40 text-center">Or Sign In with</a>
                            </label>
                                
                       
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;