import React from 'react';
import classNames from 'classnames';

export const SearchTag = (props: {
    onClickProps: string;
    children: React.ReactNode;
    className: string;
}) => {
    return (
        <div className={classNames(props.className, props.onClickProps)}>
            {props.children}
        </div>
    );
};
SearchTag.defaultProps = {
    onClickProps: 'basic',
};
