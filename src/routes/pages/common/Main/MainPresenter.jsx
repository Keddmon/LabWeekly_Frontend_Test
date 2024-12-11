import { Dashboard, MainLayout, ReportList } from '../../../../components';
import './Main.style.css';

const MainPresenter = ({
    reports,

    myReports,
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
                />
                <ReportList
                    label={'내 보고서'}
                    className={'mine'}
                    reports={myReports}
                />
                <Dashboard
                    className={'dashboard'}
                />
            </div>


        </MainLayout>
    );
};

export default MainPresenter;