
const Card = (props) => {
  return (
    <div className="card-container">
      {props.allCountriesData.map((singleData, index) =>
        <div key={index} className="card">
          <h2>{singleData.Country}</h2>
          <p>新規感染者： {singleData.NewConfirmed}</p>
          <p>感染者総数： {singleData.TotalConfirmed}</p>
        </div>
      )}
    </div>
  );
};

export default Card;


