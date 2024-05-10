import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './navbar.module.scss';
import { ReactComponent as SearchSvg } from '../../assets/search.svg';
import { ReactComponent as HomeSvg } from '../../assets/home.svg';
import { ReactComponent as SeatRowSvg } from '../../assets/seatRow.svg';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className, 'black')}>
            <div className={styles['wrapper-svg']}>
                <SearchSvg className={classNames(styles['navbar-svg'], 'white-svg')} />
                <HomeSvg className={classNames(styles['navbar-svg'], 'white-svg')} />
                <SeatRowSvg className={classNames(styles['navbar-svg'], 'white-svg')} />
            </div>
        </div>
    );
};
