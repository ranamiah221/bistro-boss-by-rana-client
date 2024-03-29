import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const axiosPublic=useAxiosPublic();
    const {googleSignIn}=useAuth();
    const navigate=useNavigate();
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName,
            }
           axiosPublic.post('/users',userInfo)
           .then(res=>{
            console.log(res.data)
             navigate('/');
           })
        })
    }
  return (
    <div>
    <div className="divider"></div> 
      <div className="flex justify-center mb-8">
        <button onClick={handleGoogleSignIn} className="btn">
            <FaGoogle className="text-blue-500"></FaGoogle>Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
