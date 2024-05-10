import { createBoard } from '@wixc3/react-board';
import { Time } from '../../../components/time/time';
import cloud from '../../../assets/cloud.png';

export default createBoard({
    name: 'Time',
    Board: () => <Time hour={'Now'} icon={cloud} temp={-10} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 932,
        windowBackgroundColor: '#000000',
        canvasWidth: 430,
    },
});
