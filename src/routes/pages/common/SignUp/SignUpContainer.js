import { useState } from 'react';
import SignupPresenter from './SignupPresenter';
import { useNavigate } from 'react-router-dom';

const SignupContainer = () => {

    /* ===== ROUTE ===== */
    const navigate = useNavigate();

    /* ===== STATE ===== */
    const [userInfo, setUserInfo] = useState({
        id: '',
        password: '',
        name: '',
    });

    /* ===== FUNCTION ===== */
    const handleSignup = async () => {
        if (!userInfo.name.length) {
            return alert('이름을 입력해주세요.');
        }

        if (!userInfo.id.length) {
            return alert('아이디를 입력해주세요.');
        }

        if (!userInfo.password.length) {
            return alert('비밀번호를 입력해주세요');
        }

        const response = await fetch('http://localhost:8080/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        });

        const result = await response.json();

        if (result.status === 400) {
            alert('회원가입 중 오류가 발생했습니다.');
            return;
        }

        if (result.status === 200) {
            alert('회원가입을 축하드립니다. 로그인 후 진행해주세요.');
            navigate('/');
        }
    };

    /* ===== RENDER ===== */
    return (
        <SignupPresenter
            userInfo={userInfo}
            setUserInfo={setUserInfo}

            onSignupClick={handleSignup}
        />
    );
};

export default SignupContainer;