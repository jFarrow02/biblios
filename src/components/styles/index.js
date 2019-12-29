import colors from './colors';
import config from './elementConfig';
import { getType } from './helpers';

const stylesConfig = {
    ...colors,
    ...config,
    getType,
};

export default stylesConfig;