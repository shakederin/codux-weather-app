import { createBoard } from '@wixc3/react-board';
import { Forecast } from '../../../components/forecast/forecast';

export default createBoard({
    name: 'Forecast',
    Board: () => <Forecast />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 932,
        canvasWidth: 430,
        canvasHeight: 932,
    },
});
