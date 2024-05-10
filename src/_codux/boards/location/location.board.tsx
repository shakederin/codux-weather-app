import { createBoard } from '@wixc3/react-board';
import { Location } from '../../../components/location/location';

export default createBoard({
    name: 'Location',
    Board: () => <Location country={'Israel'} city={'Tel-Aviv'} temp={30} className="sunnyDay" />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 932,
        canvasWidth: 430,
        canvasHeight: 932,
        canvasBackgroundColor: '#ffffff',
        canvasMargin: {
            left: 0,
        },
        windowBackgroundColor: '#ffffff',
    },
});
