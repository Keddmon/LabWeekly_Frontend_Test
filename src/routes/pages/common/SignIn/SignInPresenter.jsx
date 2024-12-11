import SigninBox from './components/SigninBox/SigninBox';
import './Signin.style.css';

const SigninPresenter = ({
    userInfo,
    setUserInfo,

    onSigninClick,
}) => {

    /* ===== RENDER ===== */
    return (
        <div className='signin-container'>
            <SigninBox
                userInfo={userInfo}
                setUserInfo={setUserInfo}

                onSigninClick={onSigninClick}
            />
        </div>
    );
};

export default SigninPresenter;