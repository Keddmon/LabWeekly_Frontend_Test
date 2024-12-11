import { useState } from 'react';
import ReportPresenter from './ReportPresenter'

const ReportContainer = () => {

    /* ===== STATE ===== */
    const [title, setTitle] = useState('');
    const [reportContent, setReportContent] = useState({
        progress: '',
        issues: '',
        planned: '',
        note: '',
    });

    /* ===== FUNCTION ===== */

    /* ===== RENDER ===== */
    return (
        <ReportPresenter
            title={title}
            setTitle={setTitle}

            reportContent={reportContent}
            setReportContent={setReportContent}
        />
    );
};

export default ReportContainer;