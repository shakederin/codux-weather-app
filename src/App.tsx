import styles from './App.module.scss';
import { Main } from './components/main/main';
import { ExtraInfo } from './components/extra-info/extra-info';
import { Navbar } from './components/navbar/navbar';
import { Forecast } from './components/forecast/forecast';

function App() {
    return (
        <div className={styles.App}>
            <Main />
            <div className={styles['info-wraper']}>
                <ExtraInfo />
                <ExtraInfo />
                <ExtraInfo />
            </div>
            <Forecast />
            <Navbar />
        </div>
    );
}

export default App;
