import classNames from 'classnames';
import styles from './locations-list.module.scss';
import { Location } from '../location/location';

export interface LocationsListProps {
    locations: { country: string; city: string; temp: number; className: string }[];
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const LocationsList = ({ locations, className }: LocationsListProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {locations.map(({ country, city, temp, className }) => (
                <Location country={country} city={city} temp={temp} className={className} />
            ))}
        </div>
    );
};
