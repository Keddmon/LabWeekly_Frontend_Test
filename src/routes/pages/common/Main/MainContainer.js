import { useEffect, useState } from 'react';
import MainPresenter from './MainPresenter'


const MainContainer = () => {

    /* ===== STATE ===== */
    const [reports, setReports] = useState([]);
    const [myReports, setMyReports] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);

    /* ===== FUNCTION ===== */
    const handleReportClick = (report) => {
        setSelectedReport(report);
    };

    /* ===== EFFECT ===== */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/report', {
                    method: 'GET',
                });

                const result = await response.json();

                if (result.status === 200) {
                    setReports(result.data);
                }
            } catch (e) {
                console.error('데이터 조회 실패: ', e);
            }
        };
        fetchData();

        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8080/report/user', {
                    method: 'GET',
                    credentials: 'include',
                });

                const result = await response.json();

                if (result.status === 200) {
                    setMyReports(result.data);
                }
            } catch (e) {
                console.error('데이터 조회 실패: ', e);
            }
        };
        fetchUserData();
    }, []);

    /* ===== RENDER ===== */
    return (
        <MainPresenter
            reports={reports}

            myReports={myReports}

            selectedReport={selectedReport}

            onReportClick={handleReportClick}
        />
    );
};

export default MainContainer;