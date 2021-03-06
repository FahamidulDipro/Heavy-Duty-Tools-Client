import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Utilities/Loading';
import { BsGoogle } from "react-icons/bs";
import useToken from '../../hooks/useToken';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [token] = useToken(user);
    const handleGoogleSignIn = ()=>{
        signInWithGoogle();
    }
    if(loading){
        return <Loading></Loading>
    }
    if(token){
        navigate(from, { replace: true });
    }
    return (
        <div>
             <div className="divider">OR</div>
            <button className='btn bg-blue-500 text-white uppercase w-full border-0' onClick={handleGoogleSignIn}><BsGoogle className='mx-3 text-2xl'></BsGoogle> sign in with google</button>
        </div>
    );
};

export default SocialLogin;