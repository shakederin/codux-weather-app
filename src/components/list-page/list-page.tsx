import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './list-page.module.scss';
import { LocationsList } from '../locations-list/locations-list';
import { Navbar } from '../navbar/navbar';
import { SearchBar } from '../search-bar/search-bar';

export interface ListPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ListPage = ({ className }: ListPageProps) => {
    return (
        <div className={classNames(styles.root, className, 'layout')}>
            <SearchBar />
            <LocationsList
                locations={[
                    { city: 'Tel-Aviv', country: 'Israel', temp: 30, className: 'sunnyDay' },
                    { city: 'Berlin', country: 'Germany', temp: 14, className: 'grayDay' },
                    { city: 'Haifa', country: 'Israel', temp: 30, className: 'night' },
                    { city: 'Tel-Aviv', country: 'Israel', temp: 30, className: 'sunnyDay' },
                    { city: 'Berlin', country: 'Germany', temp: 14, className: 'grayDay' },
                    { city: 'Haifa', country: 'Israel', temp: 30, className: 'night' },
                    { city: 'Tel-Aviv', country: 'Israel', temp: 30, className: 'sunnyDay' },
                    { city: 'Berlin', country: 'Germany', temp: 14, className: 'grayDay' },
                    { city: 'Haifa', country: 'Israel', temp: 30, className: 'night' },
                    { city: 'Tel-Aviv', country: 'Israel', temp: 30, className: 'sunnyDay' },
                    { city: 'Berlin', country: 'Germany', temp: 14, className: 'grayDay' },
                    { city: 'Haifa', country: 'Israel', temp: 30, className: 'night' },
                ]}
            />
            <Navbar
                navigateToForecast={undefined}
                navigateToHome={undefined}
                navigateToSearch={undefined}
                selected={0}
            />
        </div>
    );
};
