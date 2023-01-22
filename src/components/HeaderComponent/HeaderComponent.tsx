import LanguageChangeComponent from "../LanguageChangeComponent/LanguageChangeComponent";

const HeaderComponent = () => {
  return (
    <div className="d-flex justify-content-between mt-5">
      <h1>NAJLEPSZA MUZYKA</h1>
      <LanguageChangeComponent />
    </div>
  );
};

export default HeaderComponent;
