import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './list-page.module.scss';

export interface ListPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ListPage = ({ className }: ListPageProps) => {
    return <div className={classNames(styles.root, className, 'layout')}></div>;
};
