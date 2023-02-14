export interface  IWeatherForecast {
    tempMax: Array<number>,
    tempMin: Array<number>
    time: Array<string>
    weekDays: Array<string>
    weathercode: Array<{ description: string, image: string }>
    windspeed: Array<number>
};