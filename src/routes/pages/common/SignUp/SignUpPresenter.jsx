import SignupBox from './components/SignupBox/SignupBox';
import './Signup.style.css';

const SignupPresenter = ({
    userInfo,
    setUserInfo,

    onSignupClick
}) => {

    /* ===== RENDER ===== */
    return (
        <div className='signup-container'>
            <SignupBox
                userInfo={userInfo}
                setUserInfo={setUserInfo}

                onSignupClick={onSignupClick}
            />
        </div>
    );
};

export default SignupPresenter;