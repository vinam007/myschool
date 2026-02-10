const weatherFn = async  () =>  {
  const response = await fetch("https://schoolapi20260210084340-abcfbkdmehb8amex.canadacentral-01.azurewebsites.net/WeatherForecast");

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export default weatherFn;

