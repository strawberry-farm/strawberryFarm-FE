const defaultImage = '/icons/default-image.png';
const defaultUserImage = '/icons/user-image.png';

export const customImage = (src: string) => {
    return src ? src : defaultImage;
};

export const customUserImage = (src: string) => {
    return src ? src : defaultUserImage;
};
