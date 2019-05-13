import {tag} from "../tag";
import {convertObjectToString} from "../../modules/CSScript/convert-object-to-string"
import {createElement} from "../../modules/CSScript/create-element"
import {colors} from "../tag/Colors"

const tagsHTML = ['div', 'section', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'header', 'footer', 'main'];

/**
 * Type Style
 * @typedef {Object<string>} Style
 * @property {'div'|'span'|'h1'} element The element HTML create.
 */
/**
 * @description Generate CSS, add style in DOM and create Element
 * @param {string|Object|Style} styles
 * @return string | HTMLElement
 */
function CSScript(styles) {
    if (typeof styles === 'object' && Array.isArray(styles)) {
        return tag(styles);
    } else if (typeof styles === 'object') {
        const styleConverted = convertObjectToString(styles);
        const className = tag([styleConverted]);
        return verifyIfCreateElement(styles, className);
    } else if (typeof styles === 'string') {
        return tag([styles]);
    }
}

/**
 * Static property to get all colors
 */
CSScript.colors = colors;

/**
 * Create function execute all tags HTML
 */
tagsHTML.forEach(tag => {
    CSScript[tag] = executeCSScriptWithTagHTML(tag);
});

export {CSScript};

function executeCSScriptWithTagHTML(tag) {
    return (style) => {
        if (typeof style === 'object' && Array.isArray(style)) {
            const classname = CSScript(style);
            return createElement(tag, classname);
        } else if (typeof style === 'object') {
            style.element = tag;
            return CSScript(style);
        }
    }
}

/**
 * @description verify if create element or return the classname
 * @param {Object} styles
 * @param {string} className
 * @return HTMLElement | string
 */
function verifyIfCreateElement(styles, className) {
    if (styles.selector && !styles.element) {
        throw new Error('Ao informar a propiedade target a propiedade element deve ser obrigatoria');
    } else if (styles.element && !styles.selector) {
        return createElement(styles.element, className);
    } else if (styles.element && styles.selector) {
        const $node = createElement(styles.element, className);
        insertNodeInTarget($node, styles.selector);
        return $node;
    }

    return className;
}

/**
 * @description Insert node in DOM
 * @param {HTMLElement} node
 * @param {string} selector
 */
function insertNodeInTarget(node, selector) {
    const $target = document.querySelector(selector);
    $target.appendChild(node);
}
