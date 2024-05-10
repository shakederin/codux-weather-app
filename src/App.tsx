import './styles/common/style-guide.css';
import styles from './App.module.scss';
import { Main } from './components/main/main';
import { ExtraInfo } from './components/extra-info/extra-info';
import { Navbar } from './components/navbar/navbar';
import { ExtraInfoWrapper } from './components/extra-info-wrapper/extra-info-wrapper';
import Classnames from 'classnames';
import sun from './assets/sun.png';
import rain from './assets/rain.png';
import cloud from './assets/cloud.png';
import { Forecast } from './components/forecast/forecast';

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
            <Forecast
                timeForecast={[
                    { hour: 'Now', icon: cloud, temp: -13 },
                    { hour: '8 AM', icon: rain, temp: -10 },
                    { hour: '9 AM', icon: sun, temp: -8 },
                    { hour: '10 AM', icon: rain, temp: -5 },
                    { hour: '11 AM', icon: sun, temp: -3 },
                ]}
            />
            <Navbar navigateToHome={undefined} navigateToSearch={undefined} selected={1} />
        </div>
    );
}

export default App;
