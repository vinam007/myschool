import { useState } from "react";
import weatherFn from "../Services/weatherService";

const WeatherUI = () => {
  const [weather, setWeather] = useState([]);

  const myfn = async () => {
  try {
    const data = await weatherFn();
    setWeather(data);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
  return (
    <div>
      <h2>Weather Information</h2>

        {(
          <>
            {weather.map((w: any) => (
              <div key={w.date}>
                <p>Date: {w.date}</p>
                <p>Temperature: {w.temperatureC}°C</p>
              </div>
            ))}
          </>
        )}

      <button onClick={myfn}>Pull data</button>
    </div>
  );
};

export default WeatherUI;
