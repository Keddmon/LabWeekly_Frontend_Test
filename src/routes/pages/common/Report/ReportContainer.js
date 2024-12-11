import { useState } from 'react';
import ReportPresenter from './ReportPresenter'
import { useNavigate } from 'react-router-dom';

const ReportContainer = () => {

    /* ===== ROUTE ===== */
    const navigate = useNavigate();

    /* ===== STATE ===== */
    const [reportContent, setReportContent] = useState({
        title: '',
        progress: '',
        issues: '',
        planned: '',
        note: '',
    });

    /* ===== FUNCTION ===== */
    const handleCreateReport = async () => {
        const response = await fetch('http://localhost:8080/report/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(reportContent),
        });

        const result = await response.json();

        if (result.status === 200) {
            alert('보고서 작성이 완료되었습니다.');
            navigate('/main');
        }
    };    

    /* ===== RENDER ===== */
    return (
        <ReportPresenter
            reportContent={reportContent}
            setReportContent={setReportContent}

            onCreateReportClick={handleCreateReport}
        />
    );
};

export default ReportContainer;