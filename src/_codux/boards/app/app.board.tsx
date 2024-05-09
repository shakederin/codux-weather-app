import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 986,
        windowBackgroundColor: '#efaff9',
        canvasBackgroundColor: '#efaff9',
    },
});
