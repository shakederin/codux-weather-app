import classNames from 'classnames';
import styles from './extra-info.module.scss';

export interface ExtraInfoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ExtraInfo = ({ className }: ExtraInfoProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div />
            <div />
        </div>
    );
};
