export interface IWeatherJsonData {
    current_weather: {
        temperature: number;
        windspeed: number, winddirection: number;
        weathercode: number;
        timer: number;
    };
    daily: {
        time: Array<string>;
        weathercode: Array<number>;
        temperature_2m_max: Array<number>;
        temperature_2m_min: Array<number>;
        windspeed_10m_max: Array<number>;
    };
    daily_units: {
        temperature_2m_max: Array<string>;
        temperature_2m_min: Array<string>;
        time: Array<string>;
        weathercode: Array<string>;
        windspeed_10m_max: Array<string>
    };
    elevation: number;
    generationtime_ms: number;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
}
