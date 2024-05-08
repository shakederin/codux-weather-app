import { createBoard } from '@wixc3/react-board';
import  a from '../../assets/001-weather.png';
import SnowstormPng from '../../assets/004-snowstorm.png';

export default createBoard({
    name: 'New Board test',
    Board: () => (
        <div>
<img src={ SnowstormPng } />
            <img
                src={a}
                alt=""
            />
        </div>
    ),
    isSnippet: true,
});
