import { createBoard } from '@wixc3/react-board';
import { ForecastRow } from '../../../components/forecast-row/forecast-row';
import cloud from '../../../assets/cloud.png';
import rain from '../../../assets/rain.png';
import sun from '../../../assets/sun.png';

export default createBoard({
    name: 'ForecastRow',
    Board: () => <ForecastRow data={[
        {date: "28 Jule", dayTemp:19, description: "Sunshower", nightTemp: 15, icon:rain},
        {date: "29 Jule", dayTemp:17, description: "Cloudy", nightTemp: 13, icon:cloud},
        {date: "30 Jule", dayTemp:18, description: "Mostly sunny", nightTemp: 14, icon:sun},
        ]} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 932,
        canvasWidth: 430,
        canvasHeight: 932,
    },
});
