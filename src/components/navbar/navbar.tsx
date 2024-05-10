import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './navbar.module.scss';
import { ReactComponent as SearchSvg } from '../../assets/search.svg';
import { ReactComponent as HomeSvg } from '../../assets/home.svg';
import { ReactComponent as SeatRowSvg } from '../../assets/seatRow.svg';

export interface NavbarProps {
    navigateToSearch: () => void;
    navigateToHome: () => void;
    navigateToForecast: () => void;
    selected: number;
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({
    navigateToSearch,
    navigateToHome,
    navigateToForecast,
    selected,
    className,
}: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className, 'black')}>
            <div className={styles['wrapper-svg']}>
                <div
                    className={classNames(
                        selected === 0 ? styles.selected : '',
                        styles['icon-div'],
                    )}
                >
                    <SearchSvg
                        className={classNames(styles['navbar-svg'], 'white-svg')}
                        onClick={navigateToSearch}
                    />
                </div>
                <div
                    className={classNames(
                        selected === 1 ? styles.selected : '',
                        styles['icon-div'],
                    )}
                >
                    <HomeSvg
                        className={classNames(styles['navbar-svg'], 'white-svg')}
                        onClick={navigateToHome}
                    />
                </div>
                <div
                    className={classNames(
                        selected === 2 ? styles.selected : '',
                        styles['icon-div'],
                    )}
                >
                    <SeatRowSvg
                        className={classNames(styles['navbar-svg'], 'white-svg')}
                        onClick={navigateToForecast}
                    />
                </div>
            </div>
        </div>
    );
};
