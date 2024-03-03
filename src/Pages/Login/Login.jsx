import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../component/Provider/AuthProvider';
import { Link } from 'react-router-dom';
const Login = () => {
    const captchaRef= useRef(null);
    const [disabled, setDisabled]=useState(true);
    const{signIn}=useContext(AuthContext);
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
      })
    }
    const handleValidateCaptcha=()=>{
          const user_captcha_value=captchaRef.current.value;
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
                <input type="type" ref={captchaRef} name="captcha" placeholder="type the text above" className="input input-bordered" required />
                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">validate</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p>New Here ! <small>Create an new account please  </small><Link to='/signUp' className='text-blue-500 font-medium text-base'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;