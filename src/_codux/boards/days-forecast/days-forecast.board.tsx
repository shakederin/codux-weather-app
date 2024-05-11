import { createBoard } from '@wixc3/react-board';
import { DaysForecast } from '../../../components/days-forecast/days-forecast';

export default createBoard({
    name: 'DaysForecast',
    Board: () => <DaysForecast />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 932,
        canvasWidth: 430,
        canvasHeight: 932,
    },
});
