import React, { ReactNode } from 'react';

const AddressModal = (props: {
    children: ReactNode;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <>
            <div className="model" onClick={() => props.setOpen(false)} />
            <div className="model_box">
                <div className="model_text"> {props.children}</div>
                <div>닫기</div>
            </div>
        </>
    );
};

export default AddressModal;
