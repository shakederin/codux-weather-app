import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 414,
        windowHeight: 896,
        windowBackgroundColor: '#efaff9',
        canvasBackgroundColor: '#efaff9',
    },
});
