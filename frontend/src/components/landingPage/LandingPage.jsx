import "./landingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landing">
        <h1 className="h1Landing">وظيفة مادة استرجاع المعلومات</h1>
        <br />
        <h1 className="h1Landing">ITE_SIR_BasselALKHATIB_ٍS24_HW</h1>
      </div>
      <h2 dir="rtl">الطلاب المشاركون:</h2>
      <div className="landing">
        <div className="student">
          <h1 className="student-name">ياسر الحمد</h1>
          <h1 className="student-id">yaser_122441</h1>
        </div>
        <div className="student">
          <h1 className="student-name">عبد الرحمن الاوتاني</h1>
          <h1 className="student-id">abd_alrhman_108964</h1>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
