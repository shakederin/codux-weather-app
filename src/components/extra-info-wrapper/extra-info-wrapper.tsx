import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './extra-info-wrapper.module.scss';
import { ExtraInfo } from '../extra-info/extra-info';
import { ReactComponent as WindSvg } from '../../assets/wind.svg';
import { ReactComponent as ThermometerSvg } from '../../assets/thermometer.svg';
import { ReactComponent as DropSvg } from '../../assets/drop.svg';

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
            <ExtraInfo className={'gradientBottom'} data={{ type: 'Wind', value: data.Wind }} icon={<WindSvg className={'white-svg'}/>}/>
            <ExtraInfo
                className={'gradientTop'}
                data={{ type: 'Pressure', value: data.Pressure }}
                icon={<ThermometerSvg className={'white-svg'}/>}
            />
            <ExtraInfo
                className={'purpleGradientRight'}
                data={{ type: 'Humidity', value: data.Humidity }}
                icon={<DropSvg className={'white-svg'}/>}

            />
        </div>
    );
};
