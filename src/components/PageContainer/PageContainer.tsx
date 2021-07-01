import cx from 'classnames';
import React from 'react';

import styles from './styles.module.less';

interface IProps {
  children: React.ReactNode;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const PageContainer: React.FC<IProps> = (props) => {
  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${PageContainer.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
