import './styles/common/style-guide.css';
import styles from './App.module.scss';
import { Main } from './components/main/main';
import { ExtraInfo } from './components/extra-info/extra-info';
import { Navbar } from './components/navbar/navbar';
import { Forecast } from './components/forecast/forecast';
import { ExtraInfoWrapper } from './components/extra-info-wrapper/extra-info-wrapper';
import Classnames from 'classnames';

function App() {
    return (
        <div className="layout">
            <Main
                data={{
                    date: '25 January, Wednesday',
                    realFeel: 10,
                    temp: -18,
                }}
            />
            <ExtraInfoWrapper data={{ Wind: '5-8 km/h', Pressure: '1000 MB', Humidity: '51%' }} />
            <Forecast />
            <Navbar navigateToHome={undefined} navigateToSearch={undefined} selected={1} />
        </div>
    );
}

export default App;
