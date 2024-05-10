import { createBoard } from '@wixc3/react-board';
import { SearchBar } from '../../../components/search-bar/search-bar';

export default createBoard({
    name: 'SearchBar',
    Board: () => <SearchBar />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 932,
        canvasWidth: 430,
        canvasHeight: 932,
        canvasBackgroundColor: '#000000',
    },
});
