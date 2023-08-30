import React from 'react';
import classNames from 'classnames';
import '../../../styles/layout/header/_header.scss';
export const SearchTag = (props: {
    onClickProps: string;
    children: React.ReactNode;
    className: string;
}) => {
    return (
        <div
            className={classNames(props.className, props.onClickProps)}
            // onClick={onClickHandler}
        >
            {props.children}
        </div>
    );
};
SearchTag.defaultProps = {
    onClickProps: 'basic',
};
