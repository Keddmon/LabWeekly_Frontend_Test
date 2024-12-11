import { useState } from 'react';
import SigninPresenter from './SigninPresenter';
import { useNavigate } from 'react-router-dom';

const SigninContainer = () => {

    /* ===== ROUTE ===== */
    const navigate = useNavigate();

    /* ===== STATE ===== */
    const [userInfo, setUserInfo] = useState({
        id: '',
        password: '',
    });

    /* ===== FUNCTION ===== */
    const handleSignin = async () => {

        if (!userInfo.id.length) {
            alert('아이디를 입력해주세요.');
            return;
        }

        if (!userInfo.password.length) {
            alert('비밀번호를 입력해주세요.');
            return;
        }

        const response = await fetch('http://localhost:8080/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(userInfo),
        });

        const result = await response.json();

        if (!response.ok) {
            alert(result.message);
            return;
        }

        alert(`${result.data.name}님 반갑습니다.`);
        navigate('/main');
    };

    /* ===== RENDER ===== */
    return (
        <SigninPresenter
            userInfo={userInfo}
            setUserInfo={setUserInfo}

            onSigninClick={handleSignin}
        />
    );
};

export default SigninContainer;