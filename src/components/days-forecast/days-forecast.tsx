import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './days-forecast.module.scss';
import sun from '../../assets/sun.png';
import cloud from '../../assets/cloud.png';
import rain from '../../assets/rain.png';
import { ForecastRow } from '../forecast-row/forecast-row';

export interface DaysForecastProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const DaysForecast = ({ className }: DaysForecastProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.forecastHeader}>Next days forecast </div>
            <ForecastRow
                data={[
                    {
                        date: '28 Jule',
                        dayTemp: 19,
                        description: 'Sunshower',
                        nightTemp: 15,
                        icon: rain,
                    },
                    {
                        date: '29 Jule',
                        dayTemp: 17,
                        description: 'Cloudy',
                        nightTemp: 13,
                        icon: cloud,
                    },
                    {
                        date: '30 Jule',
                        dayTemp: 18,
                        description: 'Mostly sunny',
                        nightTemp: 14,
                        icon: sun,
                    },
                ]}
            />
        </div>
    );
};
