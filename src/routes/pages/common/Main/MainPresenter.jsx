import { Dashboard, MainLayout, ReportList } from '../../../../components';
import './Main.style.css';

const MainPresenter = ({
    reports,

    myReports,

    selectedReport,

    onReportClick,
}) => {

    /* ===== RENDER ===== */
    return (
        <MainLayout
            title={'메인'}
        >
            <div className='main-container'>
                <ReportList
                    label={'보고서'}
                    className={'all'}
                    reports={reports}
                    onReportClick={onReportClick}
                />
                <ReportList
                    label={'내 보고서'}
                    className={'mine'}
                    reports={myReports}
                    onReportClick={onReportClick}
                />
                <Dashboard
                    className={'dashboard'}
                    report={selectedReport}
                />
            </div>


        </MainLayout>
    );
};

export default MainPresenter;