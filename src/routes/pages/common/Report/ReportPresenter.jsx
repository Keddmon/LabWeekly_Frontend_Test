import { Button, Input, MainLayout, TextArea } from '../../../../components';
import './Report.style.css';

const ReportPresenter = ({
    reportContent,
    setReportContent,

    onCreateReportClick,
}) => {

    /* ===== RENDER ===== */
    return (
        <MainLayout
            title={'보고서'}
        >
            <div className='report-container'>
                <Input
                    label={'제목'}
                    placeholder={'제목을 입력해주세요.'}
                    required
                    borderRadius={'10px'}
                    value={reportContent.title}
                    onChange={(e) => {
                        const title = e.target.value;
                        setReportContent(prev => {
                            return { ...prev, title };
                        });
                    }}
                />
                <TextArea
                    label={'진행사항'}
                    height={'100px'}
                    placeholder={'진행사항을 입력해주세요.'}
                    required
                    value={reportContent.progress}
                    onChange={(e) => {
                        const progress = e.target.value;
                        setReportContent(prev => {
                            return { ...prev, progress }
                        });
                    }}
                />
                <TextArea
                    label={'이슈사항'}
                    height={'100px'}
                    placeholder={'이슈사항을 입력해주세요.'}
                    required
                    value={reportContent.issues}
                    onChange={(e) => {
                        const issues = e.target.value;
                        setReportContent(prev => {
                            return { ...prev, issues }
                        });
                    }}
                />
                <TextArea
                    label={'예정사항'}
                    height={'100px'}
                    placeholder={'예정사항을 입력해주세요.'}
                    required
                    value={reportContent.planned}
                    onChange={(e) => {
                        const planned = e.target.value;
                        setReportContent(prev => {
                            return { ...prev, planned }
                        });
                    }}
                />
                <TextArea
                    label={'비고'}
                    height={'100px'}
                    optional
                    value={reportContent.note}
                    onChange={(e) => {
                        const note = e.target.value;
                        setReportContent(prev => {
                            return { ...prev, note }
                        });
                    }}
                />
                <div className='button-wrap'>
                    <Button
                        label={'작성하기'}
                        onClick={onCreateReportClick}
                        disabled={!(reportContent.title && reportContent.progress && reportContent.issues && reportContent.planned)}
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default ReportPresenter;