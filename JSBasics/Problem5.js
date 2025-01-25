let weather={
    "date":"16-01-2025",
    "temperature":{
        "max":20,
        "min":13
    },
    "conditions":"sunny",
    "humidity":45
}
console.log(`Weather Forecast for ${weather.date}:`);
console.log(`Conditions: ${weather.conditions}`);
console.log(`Temperature: Min ${weather.temperature.min}°C / Max ${weather.temperature.max}°C`);
console.log(`Humidity: ${weather.humidity}%`);