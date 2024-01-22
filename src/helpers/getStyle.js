export function getStyle({padding, width, height, backgroundColor, color, maskImage}) {
    return [
        padding && `padding: ${padding}px` || '',
        width && `width: ${width}px` || '',
        height && `height: ${height}px` || '',
        backgroundColor && `background-color: ${backgroundColor}` || '',
        color && `color: ${color}` || '',
        maskImage && `mask-image: url(${maskImage})` || ''
    ].join('; ')
}