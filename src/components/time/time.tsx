import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './time.module.scss';

export interface TimeProps {
    hour: string;
    icon: string;
    temp: number;
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Time = ({ hour, icon, temp, className }: TimeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="smallLight">{hour}</div>
            <img src={icon} className={styles.weather} />
            <div className={classNames('bodySmall', styles.temp)}>{temp}°</div>
        </div>
    );
};
