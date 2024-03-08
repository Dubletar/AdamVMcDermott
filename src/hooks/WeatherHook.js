import { useCallback } from "react";
import { getService } from "../utilities/fetch";


const useWeatherHook = id => {
    const [data, setData] = useState({});

    const fetchWeather = useCallback( async () => {
        const result = await getService(`https://www.weather.com/${id}`);
        if (result) {
            setData(result);
        }
    })

    useEffect(() => {
        if (id) {
            fetchWeather();
        }
    }, []);

    return [data, setData];
};

export default useWeatherHook;


const WeatherApp = id => {
    const [ data, setData ] = useWeatherHook(id);

    return (<>

    </>)
}

const WeatherContainer = () => {
    return (
        <WeatherApp id={1} />
    )
}