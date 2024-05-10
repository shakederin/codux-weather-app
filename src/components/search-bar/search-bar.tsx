import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './search-bar.module.scss';
import { ReactComponent as Search } from '../../assets/search.svg';

export interface SearchBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SearchBar = ({ className }: SearchBarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <input
                className={classNames(styles.input, 'bodySmall')}
                placeholder="Search City or Country"
            />
            <Search className={classNames('white-svg', styles.searchButton)} />
        </div>
    );
};
