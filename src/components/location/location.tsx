import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './location.module.scss';

export interface LocationProps {
    country: string;
    city: string;
    temp: number;
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Location = ({
    country = 'country',
    city = 'city',
    temp = 30,
    className,
}: LocationProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.location}>
                <div className="titleNormal">{country}</div>
                <div className="bodySmall">{city}</div>
            </div>
            <div className={classNames('titleNormal', styles.temp)}>{temp}°</div>
        </div>
    );
};
