import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../../../../../components';
import './SignupBox.style.css';

const SignupBox = ({
    userInfo,
    setUserInfo,

    onSignupClick,
}) => {

    /* ===== ROUTE ===== */
    const navigate = useNavigate();

    /* ===== RENDER ===== */
    return (
        <div className='signup-box-container'>
            <div className='title-container'>
                <span
                    className='bold'
                >회원가입</span>
            </div>
            <Input
                label={'이름'}
                placeholder={'이름을 입력해주세요.'}
                required
                value={userInfo.name}
                onChange={(e) => {
                    const name = e.target.value;
                    setUserInfo(prev => {
                        return { ...prev, name };
                    });
                }}
            />
            <Input
                label={'아이디'}
                placeholder={'아이디를 입력해주세요.'}
                required
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
                type={'password'}
                value={userInfo.password}
                required
                onChange={(e) => {
                    const password = e.target.value;
                    setUserInfo(prev => {
                        return { ...prev, password };
                    });
                }}
            />
            {/* <Input
                label={'비밀번호 재확인'}
                placeholder={'비밀번호를 재입력해주세요.'}
                required
                value={userInfo.password}
                onChange={(e) => {
                    const password = e.target.value;
                    setUserInfo(prev => {
                        return { ...prev, password };
                    });
                }}
            /> */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Button
                    label={'회원가입'}
                    onClick={onSignupClick}
                    disabled={!(userInfo.name.length && userInfo.id.length && userInfo.password.length)}
                />
                <Button
                    label={'로그인'}
                    onClick={() => navigate('/')}
                />
            </div>
        </div>
    );
};

export default SignupBox;