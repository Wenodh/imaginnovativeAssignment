import "./WeatherCard.css";

export default function WeatherCard(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="tablehead date" colSpan="2">
            Date: {props.data.dt_txt.split(" ")[0]}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="tablehead subCatogory" colSpan="2">
            Temperature
          </th>
        </tr>
        <tr>
          <td className="tabledata subCatogory">Min</td>
          <td className="tabledata subCatogory">Max</td>
        </tr>
        <tr>
          <td className="tabledata subCatogory">{props.data.main.temp_min}</td>
          <td className="tabledata subCatogory">{props.data.main.temp_max}</td>
        </tr>
        <tr>
          <td className="tabledata">Pressure</td>
          <td className="tabledata">{props.data.main.pressure}</td>
        </tr>
        <tr>
          <td className="tabledata">Humidity</td>
          <td className="tabledata">{props.data.main.humidity}</td>
        </tr>
      </tbody>
    </table>
  );
}
