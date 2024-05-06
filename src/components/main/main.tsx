import classNames from 'classnames';
import styles from './main.module.scss';

export interface MainProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Main = ({ className }: MainProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.date}>25 jan Wed</div>
            <div className={styles.temp}>
                <div className={styles['big-font']}>-10 C</div>
                <div className={styles['small-font']}>Real Feel</div>
            </div>
        </div>
    );
};
