import './Dashboard.style.css';

const Dashboard = ({
    className,
    report,
}) => {

    /* ===== RENDER ===== */
    return (

        <div className={`${className} dashboard-container`}>
            {report && (
                <>
                    <span
                        className='large bold'
                        style={{ width: '100%', borderBottom: '1px solid var(--gray-color)', paddingBottom: '5px' }}
                    >{report.title}</span>
                    <div className='content-wrap'>
                        <span
                            className='bold'
                            style={{ width: '100%' }}
                        >진행사항</span>
                        <div className='content'>
                            {report.progress}
                        </div>
                    </div>
                    <div className='content-wrap'>
                        <span
                            className='bold'
                            style={{ width: '100%' }}
                        >이슈사항</span>
                        <div className='content'>
                            {report.issues}
                        </div>
                    </div>
                    <div className='content-wrap'>
                        <span
                            className='bold'
                            style={{ width: '100%' }}
                        >예정사항</span>
                        <div className='content'>
                            {report.planned}
                        </div>
                    </div>
                    {report.note && (
                        <div className='content-wrap'>
                            <span
                                className='bold'
                                style={{ width: '100%' }}
                            >비고</span>
                            <div className='content'>
                                {report.note}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Dashboard;