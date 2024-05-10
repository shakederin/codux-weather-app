import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './extra-info-wrapper.module.scss';
import { ExtraInfo } from '../extra-info/extra-info';
import thermometer from '../../assets/thermometer.png';
import drop from '../../assets/drop.svg';
import wind from '../../assets/wind.png';

export interface ExtraInfoWrapperProps {
    data: {
        Wind: string;
        Pressure: string;
        Humidity: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ExtraInfoWrapper = ({ data }: ExtraInfoWrapperProps) => {
    return (
        <div className={classNames(styles.root)}>
            <ExtraInfo
                className={'gradientBottom'}
                data={{ type: 'Wind', value: data.Wind }}
                icon={wind}
            />
            <ExtraInfo
                className={'gradientTop'}
                data={{ type: 'Pressure', value: data.Pressure }}
                icon={thermometer}
            />
            <ExtraInfo
                className={'purpleGradientRight'}
                data={{ type: 'Humidity', value: data.Humidity }}
                icon={drop}
            />
        </div>
    );
};
