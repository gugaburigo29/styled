import {colors} from "./Colors";

/**
 * @type {{colors: {red, orange, green, blue, yellow}}}
 */
const parameters = {
  colors
};

/**
 * @description Receive a string with styles and return whit all formatters
 * @param {Array<string>} styles
 * @return string
 */
export function createStyleString(...styles) {
    const styleArray = styles.map((css, i, array) => {
        if (typeof css === 'object') {
            return css;
        } else if (typeof css === 'function') {
            return css(parameters);
        }
    });

    const styleString = styleArray.join('');
    const styleSplitForBreakLines = styleString.split(',');

    return removeCommaAndReturnString(styleSplitForBreakLines);
}

/**
 * @param {Array} array
 * @return string
 */
function removeCommaAndReturnString(array) {
    return array.filter(arr => arr !== ',').join('')
}
