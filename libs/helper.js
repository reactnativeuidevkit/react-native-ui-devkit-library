
const convertSingleCode = (colorCode) => {
    let hexCode = colorCode.toString(16);
    return (hexCode.length == 1) ? ('0' + hexCode) : hexCode;
}

export const rgbToHex = (rgb) => {
    if (!rgb) {
        return '#000';
    } else {
        rgb = rgb.toLowerCase();
        rgb = rgb.replace('rgb(', '').replace(')', '');
        rgb = rgb.split(',');
        rgb = '#' + convertSingleCode(parseInt(rgb[0])) + convertSingleCode(parseInt(rgb[1])) + convertSingleCode(parseInt(rgb[2]));
        return rgb;
    }
}