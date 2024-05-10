import '../../styles/common/style-guide.css';
import classNames from 'classnames';
import styles from './extra-info.module.scss';

export interface ExtraInfoProps {
    className?: string;
    data: { type: string; value: string };
    icon: JSX.Element
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ExtraInfo = ({ className, data, icon }: ExtraInfoProps) => {

    return (
        <div className={classNames(styles.root, className)}>
            {icon}
            <div >{data.type}</div>
            <div>{data.value}</div>
        </div>
    );
};
