export interface IWeatherData {
    location: string;
    temp: string;
    wind: string;
    weatherDescription: {
        description: string;
        image: string;
    };
}