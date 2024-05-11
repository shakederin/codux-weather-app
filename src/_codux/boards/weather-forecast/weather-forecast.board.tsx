import { createBoard } from '@wixc3/react-board';
import { WeatherForecast } from '../../../components/weather-forecast/weather-forecast';

export default createBoard({
    name: 'WeatherForecast',
    Board: () => <WeatherForecast />,
    isSnippet: true,
    environmentProps: {
       windowWidth: 1024,
        windowHeight: 986,
        windowBackgroundColor: '#efaff9',
        canvasBackgroundColor: '#efaff9',
    },
});
