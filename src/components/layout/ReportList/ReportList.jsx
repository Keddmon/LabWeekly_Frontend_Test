import './ReportList.style.css';
import ReportCard from '../ReportCard';


const ReportList = ({
    label,
    className,
    reports,
}) => {

    /* ===== STYLE ===== */

    /* ===== RENDER ===== */
    return (
        <div className={`report-list-container ${className}`}>
            <span
                className='title bold'
                style={{
                    width: '100%',
                    borderBottom: '1px solid var(--border-color)',
                    paddingBottom: '5px',
                }}
            >{label}</span>
            <div className='card-wrap'>
                {
                    reports?.map((report, index) => (
                        <ReportCard
                            key={index}
                            report={report}
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default ReportList;