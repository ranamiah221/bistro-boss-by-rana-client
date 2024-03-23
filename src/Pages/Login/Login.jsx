import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../component/Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';
import SocialLogin from '../component/SocialLogin/SocialLogin';
const Login = () => {
    
    const [disabled, setDisabled]=useState(true);
    const{signIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    console.log('state in the location login page', location.state);
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const handleLogin= event =>{
      event.preventDefault();
      const form= event.target;
      const email= form.email.value;
      const password= form.password.value;
      console.log(email, password);
      signIn(email, password)
      .then(result=>{
        const user= result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500
        });
           navigate(from,{replace:true});
      })
    }
    const handleValidateCaptcha=(e)=>{
          const user_captcha_value=e.target.value;
          if(validateCaptcha(user_captcha_value)===true){
            setDisabled(false);
          }
          else{
            setDisabled(true);
          }     
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full gap-16 flex-col lg:flex-row-reverse">
          <div className="w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                
              </div>
              {/* captcha */}

              <div className="form-control">
                <label className="label">
                   <LoadCanvasTemplate />
                </label>
                <input type="type" onBlur={handleValidateCaptcha}  name="captcha" placeholder="type the text above" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                {/* Todo apply disabled on recaptcha */}
                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='p-8'>New Here ! <small>Create an new account please  </small><Link to='/signUp' className='text-blue-500 font-medium text-base'>Sign Up</Link></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default Login;