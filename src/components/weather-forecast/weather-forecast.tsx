import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './weather-forecast.module.scss';
import { Main } from '../main/main';
import App from '../../App';
import { DaysForecast } from '../days-forecast/days-forecast';
import { Navbar } from '../navbar/navbar';

export interface WeatherForecastProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const WeatherForecast = ({ className }: WeatherForecastProps) => {
    return (
        <div className="layout">
            <Main
                data={{
                    date: '25 Jule, Monday',
                    realFeel: 10,
                    temp: 22,
                }}
            />
            <DaysForecast />
            <Navbar
                navigateToSearch={function (): void {
                    throw new Error('Function not implemented.');
                }}
                navigateToHome={function (): void {
                    throw new Error('Function not implemented.');
                }}
                navigateToForecast={function (): void {
                    throw new Error('Function not implemented.');
                }}
                selected={2}
            />
        </div>
    );
};
