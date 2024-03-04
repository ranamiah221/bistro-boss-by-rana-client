import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from './../component/Provider/AuthProvider';


const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const{createUser}=useContext(AuthContext);
  const onSubmit = data =>{
    console.log(data);
    createUser(data.email, data.password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
    })
  } 
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full gap-16 flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now !!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card w-1/2 shrink-0  max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name",{required:true})} name="name" placeholder="name" className="input input-bordered" />
                {errors.name && <span className="text-red-600 text-xl font-normal">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{required:true})} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600 text-xl font-normal">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",{required:true})} name="password" placeholder="password" className="input input-bordered" />
                {errors.email && <span className="text-red-600 text-xl font-normal">Password is required</span>}
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className="pl-10 mb-10">Already you have an account please  <Link className="text-blue-600 text-base font-medium" to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;