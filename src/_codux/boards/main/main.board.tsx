import { createBoard } from '@wixc3/react-board';
import { Main } from '../../../components/main/main';

export default createBoard({
    name: 'Main',
    Board: () => (
        <Main
            data={{
                    date: '25 January, Wednesday',
                    realFeel: 10,
                    temp: -18,
                }}
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 932,
        canvasHeight: 932,
        canvasWidth: 430,
    },
});
