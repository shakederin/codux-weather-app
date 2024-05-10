import { createBoard } from '@wixc3/react-board';
import { Forecast } from '../../../components/forecast/forecast';
import cloud from '../../../assets/cloud.png';
import rain from '../../../assets/rain.png';
import sun from '../../../assets/sun.png';

export default createBoard({
    name: 'Forecast',
    Board: () => (
        <Forecast
            timeForecast={[
                { hour: 'Now', icon: cloud, temp: -13 },
                { hour: '8 AM', icon: rain, temp: -10 },
                { hour: '9 AM', icon: sun, temp: -8 },
                { hour: '10 AM', icon: rain, temp: -5 },
                { hour: '11 AM', icon: sun, temp: -3 },
            ]}
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 932,
        canvasWidth: 430,
        canvasHeight: 932,
    },
});
