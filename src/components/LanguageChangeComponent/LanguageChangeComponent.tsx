import plFlag from "../../assets/plFlag.png";
import gbFlag from "../../assets/gbFlag.png";

const LanguageChangeComponent = () => {
  return (
    <div>
      <img src={plFlag} alt="PL" className="shadow" />
      <img src={gbFlag} alt="ENG" className="shadow" />
    </div>
  );
};

export default LanguageChangeComponent;
