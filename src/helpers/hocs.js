/* eslint-disable import/prefer-default-export */
import CSSModules from 'react-css-modules';

export const styled = styles => c => CSSModules(c, styles);
