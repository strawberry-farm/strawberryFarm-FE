export const NextArrow = (props: any) => {
    const { className, onClick } = props;

    return (
        <div
            className={className}
            style={{
                display: 'block',
                background: 'red',
            }}
            onClick={onClick}
        />
    );
};

export const PrevArrow = (props: any) => {
    const { className, onClick } = props;

    return (
        <div
            className={className}
            style={{
                display: 'block',
                background: 'red',
                color: '#dcdcdc',
                content: '<<',
            }}
            onClick={onClick}
        />
    );
};
