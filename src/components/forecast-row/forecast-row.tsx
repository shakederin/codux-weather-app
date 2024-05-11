import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './forecast-row.module.scss';
import { ReactComponent as Hyphen } from '../../assets/horizontal-line.svg';

export interface ForecastRowProps {
    data: { date: string; icon: string; dayTemp: number; nightTemp: number; description: string }[];
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ForecastRow = ({ data, className }: ForecastRowProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {data.map(({ date, icon, dayTemp, nightTemp, description }) => (
                <div className={styles.row}>
                    <div className="smallNormal">{date}</div>
                    <img src={icon} className={styles.icon} />
                    <div>{dayTemp}°</div>
                    <Hyphen className={classNames('white-svg', styles.opacity)} />
                    <div className={classNames(styles.opacity, styles['small-font'])}>
                        {nightTemp}°
                    </div>
                    <div
                        className={classNames(
                            styles.description,
                            styles.opacity,
                            styles['small-font'],
                        )}
                    >
                        {description}
                    </div>
                </div>
            ))}
        </div>
    );
};
