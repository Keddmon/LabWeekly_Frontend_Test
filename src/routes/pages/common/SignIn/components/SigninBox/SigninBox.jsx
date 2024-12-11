import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../../../../../components';
import './SigninBox.style.css';

const SigninBox = ({
    userInfo,
    setUserInfo,

    onSigninClick,
}) => {
    /* ===== ROUTE ===== */
    const navigate = useNavigate();

    /* ===== RENDER ===== */
    return (
        <div className='signin-box-container'>
            <div className='title-container'>
                <span
                    className='bold'
                >연구실 주간보고 시스템</span>
            </div>
            <Input
                label={'아이디'}
                placeholder={'아이디를 입력해주세요.'}
                value={userInfo.id}
                onChange={(e) => {
                    const id = e.target.value;
                    setUserInfo(prev => {
                        return { ...prev, id };
                    });
                }}
            />
            <Input
                label={'비밀번호'}
                placeholder={'비밀번호를 입력해주세요.'}
                value={userInfo.password}
                onChange={(e) => {
                    const password = e.target.value;
                    setUserInfo(prev => {
                        return { ...prev, password };
                    });
                }}
            />
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            }}>
                <Button
                    label={'로그인'}
                    onClick={onSigninClick}
                />
                <Button
                    label={'회원가입'}
                    onClick={() => navigate('/signup')}
                />
            </div>
        </div>
    );
};

export default SigninBox;