import { createBoard } from '@wixc3/react-board';
import { ExtraInfo } from '../../../components/extra-info/extra-info';

export default createBoard({
    name: 'ExtraInfo',
    Board: () => <ExtraInfo />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 130,
        canvasHeight: 150,
        canvasBackgroundColor: '#ffffff',
        windowWidth: 300,
        windowHeight: 300,
        windowBackgroundColor: '#f1f1f1',
        canvasMargin: {
            left: 85,
        },
    },
});
