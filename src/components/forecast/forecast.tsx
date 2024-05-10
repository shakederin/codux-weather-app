import classNames from 'classnames';
import styles from './forecast.module.scss';
import cloud from '../../assets/cloud.png';
import { Time } from '../time/time';

export interface ForecastProps {
    timeForecast: {hour:string, icon:string, temp:number}[];
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Forecast = ({ timeForecast, className }: ForecastProps) => {
    return (
        <div className={classNames(styles.root, className)}>
        {timeForecast.map(({hour, icon, temp})=>
            <Time hour={hour} icon={icon} temp={temp} />
        )}
        </div>
    );
};
