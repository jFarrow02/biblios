import colors from './colors';

export const getType = type =>{
    let bgColor;
    switch(type){
        case 'caution':
            bgColor = colors.yellow05;
            break;
        case 'alert':
            bgColor = colors.orange05;
            break;
        case 'warning':
            bgColor = colors.red05;
            break;
        case 'disabled':
            bgColor = colors.gray05;
            break;
        case 'normal':
            default:
                bgColor = colors.blue05;
    }
    return bgColor;
}