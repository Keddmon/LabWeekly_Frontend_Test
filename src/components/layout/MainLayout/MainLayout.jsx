import './MainLayout.style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ===== ANTD ===== */
import {
    Menu,
    Layout,
    theme,
    Button
} from 'antd';

/* ===== ANTD ICONS ===== */
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
} from '@ant-design/icons';

/* ===== ANTD LAYOUTS ===== */
const {
    Header,
    Footer,
    Sider,
    Content,
} = Layout;

const MainLayout = ({
    title,
    children,
    isHeader = true,
    isSider = true,
    isFooter = true,
}) => {

    /* ===== ROUTE ===== */
    const navigate = useNavigate();
    
    /* ===== STATE ===== */
    const [collapsed, setCollapsed] = useState(false);
    
    /* ===== FUNCTION ===== */
    const handleLogout = async () => {
        const response = await fetch('http://localhost:8080/user/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();

        if (result.status === 200) {
            navigate('/');
        }
    };
    
    /* ===== STYLES ===== */
    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();

    const styles = {
        header: {
            backgroundColor: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            title: {
                fontSize: '1.5rem',
                fontWeight: '600',
            },
            logout: {
                cursor: 'pointer',
            }
        },
        content: {
            textAlign: 'center',
            minHeight: 120,
            lineHeight: '120px',
            color: '#fff',
            backgroundColor: '#0958d9',
        },
        sider: {
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#FFFFFF',
        },
        footer: {
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#4096ff',
        },
        layout: {
            borderRadius: 8,
            overflow: 'hidden',
            width: 'calc(100% - 8px)',
            maxWidth: 'calc(100% - 8px)',
        },
        siderHeader: {
            background: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    };

    /* ===== RENDER ===== */
    return (
        <Layout style={{
            height: '100vh',
        }}>
            {
                isSider &&
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    width={225}
                    style={{ ...styles.sider }}
                >
                    <div style={{ ...styles.siderHeader }}>
                        {!collapsed && (
                            <h4
                                style={{
                                    paddingLeft: '20px',
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: 'var(--primary-color)',
                                    cursor: 'pointer'
                                }}

                                onClick={() => navigate('/main')}
                            >LabWeekly</h4>
                        )}
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                paddingLeft: '16px',
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </div>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: '메인',
                                onClick: () => navigate('/main'),
                            },
                            {
                                key: '2',
                                icon: <UploadOutlined />,
                                label: '보고서 작성',
                                onClick: () => navigate('/report')
                            },
                        ]}
                    />
                </Sider>
            }
            <Layout>
                {
                    isHeader &&
                    <Header
                        style={{
                            ...styles.header
                        }}
                    >
                        <span style={{ ...styles.header.title }}>{title}</span>
                        <span 
                            style={{ ...styles.header.logout }}
                            onClick={handleLogout}
                        >로그아웃</span>
                    </Header>
                }
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        overflowY: 'scroll',
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;