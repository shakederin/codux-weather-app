import classNames from 'classnames';
import styles from './navbar.module.scss';
import BinocularsSvg from '../../assets/binoculars.svg';
import SunSvg from '../../assets/sun.svg';
import SmileSvg from '../../assets/smile.svg';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['icon-wraper']}>
                <img src={SmileSvg} alt="" />
                <img src={SunSvg} alt="" />
                <img src={BinocularsSvg} alt="" />
            </div>
        </div>
    );
};
