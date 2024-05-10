import { createBoard } from '@wixc3/react-board';
import { ListPage } from '../../../components/list-page/list-page';

export default createBoard({
    name: 'ListPage',
    Board: () => <ListPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 988,
        windowBackgroundColor: '#efaff9',
        canvasBackgroundColor: '#efaff9',
    },
});
