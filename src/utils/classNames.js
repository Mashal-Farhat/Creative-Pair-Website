/**
 * Utility function to combine class names conditionally
 * @param {...any} classes - Classes to combine
 * @returns {string} Combined class string
 */
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Utility to create BEM-style class names
 * @param {string} block - BEM block name
 * @param {string} element - BEM element name (optional)
 * @param {string} modifier - BEM modifier name (optional)
 * @returns {string} BEM-formatted class name
 */
export const bemClass = (block, element = '', modifier = '') => {
  let className = block;
  if (element) className += `__${element}`;
  if (modifier) className += `--${modifier}`;
  return className;
};
