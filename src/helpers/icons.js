export const iconPath = (import.meta.env.BASE_URL || '') + 'assets/icons/'

export const iconNames = {
    SHOW: 'show-svgrepo-com.svg',
    HIDE: 'hide-svgrepo-com.svg',
    ADD: 'addition-round-svgrepo-com.svg',
    REMOVE: 'x-round-svgrepo-com.svg',
    DOWNLOAD: 'download-svgrepo-com.svg',
    UPLOAD: 'upload-svgrepo-com.svg',
}

export function getIcon(iconName) {
    return iconPath + iconNames[iconName]
}