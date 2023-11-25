const defaultImage = 'images/common/default-image.png';
const defaultUserImage = 'images/icons/user-line.png';

export const customImage = (src: string) => {
    return src ? src : defaultImage;
};

export const customUserImage = (src: string) => {
    return src ? src : defaultUserImage;
};
