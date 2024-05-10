import classNames from 'classnames';
import styles from './weather-today.module.scss';

export interface WeatherTodayProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WeatherToday = ({ className }: WeatherTodayProps) => {
    return <div className={classNames(styles.root, className)}>WeatherToday</div>;
};
