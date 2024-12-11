import './ReportCard.style.css';

const ReportCard = ({
    report,
    onReportClick,
}) => {

    /* ===== RENDER ===== */
    return (
        <div
            className='report-card-container'
            onClick={() => onReportClick(report)}
        >
            <span className='report-card-title'>{report?.title}</span>
            <div className='report-card-info'>
                <span style={{ marginRight: '10px' }}>{report?.created_at.split('T')[0]}</span>
                <span>{report.user?.name}</span>
            </div>
        </div>
    );
};

export default ReportCard;