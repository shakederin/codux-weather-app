import classNames from 'classnames';
import styles from './main.module.scss';

export interface MainProps {
    data: {
        temp: number;
        realFeel: number;
        date: string;
    };
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Main = ({ data: {temp = -10, realFeel = 18, date= "25 January, Wednsday"}, className }: MainProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.date}>{date}</div>
            <div className={styles['temp-wrapper']}>
                <div className={styles.temp}>
                    <div className={styles['big-font']}>{temp}°C</div>
                    <div className={styles['small-font']}>Real Feel {realFeel}°C</div>
                </div>
            </div>
        </div>
    );
};
