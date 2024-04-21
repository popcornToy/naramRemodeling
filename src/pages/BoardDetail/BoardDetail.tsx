import BoardDetailLayout from '@/components/organisms/BoardDetailLayout/BoardDetailLayout';
import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import mainImage from '/Notice_main.svg';

function BoardDetail() {
  return (
    <div>
      <PageLayout
        isMainMenu={false}
        EngTitle="Q&A"
        KorTitle="문의사항"
        alt="문의사항 페이지"
        mainImage={mainImage}
        firstTitle="Q&A"
        secondTitle="문의사항"
        thirdTitle="나람에 궁금한 점을 알려주세요."
      >
        <BoardDetailLayout />
      </PageLayout>
    </div>
  );
}

export default BoardDetail;
