import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'

import {
    Main,
    Report,
    Signin,
    Signup
} from './pages';
import { getCookie } from '../utils/cookie';

const Router = () => {

    /* ===== ROUTE ===== */
    const navigate = useNavigate();

    /* ===== EFFECT ===== */
    useEffect(() => {
        const sessionId = getCookie('connect.sid');
        if (sessionId) {
            navigate('/main');
        } else {
            navigate('/');
        }
    }, [])

    /* ===== RENDER ===== */
    return (
        <>
            <Routes>

                {/* 로그인 페이지 */}
                <Route
                    path='/'
                    element={<Signin />}
                />
                {/* 로그인 페이지 */}
                <Route
                    path='/signup'
                    element={<Signup />}
                />
                {/* 메인 페이지 */}
                <Route
                    path='/main'
                    element={<Main />}
                />
                {/* 보고서 페이지 */}
                <Route
                    path='/report'
                    element={<Report />}
                />
            </Routes>
        </>
    );
};

export default Router;