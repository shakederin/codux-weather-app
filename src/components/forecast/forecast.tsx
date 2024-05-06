import classNames from 'classnames';
import styles from './forecast.module.scss';

export interface ForecastProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Forecast = ({ className }: ForecastProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.time}>
                <div>Text</div>
                <div>Text</div>
                <div>Text</div>
            </div>
            <div className={styles.time}>
                <div>Text</div>
                <div>Text</div>
                <div>Text</div>
            </div>
            <div className={styles.time}>
                <div>Text</div>
                <div>Text</div>
                <div>Text</div>
            </div>
            <div className={styles.time}>
                <div>Text</div>
                <div>Text</div>
                <div>Text</div>
            </div>
            <div className={styles.time}>
                <div>Text</div>
                <div>Text</div>
                <div>Text</div>
            </div>
        </div>
    );
};
