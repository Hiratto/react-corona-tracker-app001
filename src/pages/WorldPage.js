import Card from "../components/Card"
import Title from "../components/Title";

const WorldPage = (props) => {
  return (
    <div>
      <Title />
      <Card allCountriesData={props.allCountriesData} />
    </div>
  );
};


export default WorldPage;