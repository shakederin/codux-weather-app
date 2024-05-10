import { createBoard } from '@wixc3/react-board';
import { LocationsList } from '../../../components/locations-list/locations-list';

export default createBoard({
    name: 'LocationsList',
    Board: () => (
        <LocationsList
            locations={[
                { city: 'Tel-Aviv', country: 'Israel', temp: 30, className: 'sunnyDay' },
                { city: 'Berlin', country: 'Germany', temp: 14, className: 'grayDay' },
                { city: 'Haifa', country: 'Israel', temp: 30, className: 'night' },
                { city: 'Tel-Aviv', country: 'Israel', temp: 30, className: 'sunnyDay' },
                { city: 'Berlin', country: 'Germany', temp: 14, className: 'grayDay' },
                { city: 'Haifa', country: 'Israel', temp: 30, className: 'night' },
                { city: 'Tel-Aviv', country: 'Israel', temp: 30, className: 'sunnyDay' },
                { city: 'Berlin', country: 'Germany', temp: 14, className: 'grayDay' },
                { city: 'Haifa', country: 'Israel', temp: 30, className: 'night' },
                { city: 'Tel-Aviv', country: 'Israel', temp: 30, className: 'sunnyDay' },
                { city: 'Berlin', country: 'Germany', temp: 14, className: 'grayDay' },
                { city: 'Haifa', country: 'Israel', temp: 30, className: 'night' },
            ]}
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 932,
        canvasWidth: 430,
        canvasHeight: 932,
    },
});
