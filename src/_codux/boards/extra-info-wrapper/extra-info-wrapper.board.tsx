import { createBoard } from '@wixc3/react-board';
import { ExtraInfoWrapper } from '../../../components/extra-info-wrapper/extra-info-wrapper';

export default createBoard({
    name: 'ExtraInfoWrapper',
    Board: () => (
        <ExtraInfoWrapper data={{ Wind: '5-8 km/h', Pressure: '1000 MB', Humidity: '51%' }} />
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 932,
        canvasWidth: 420,
        canvasHeight: 932,
    },
});
