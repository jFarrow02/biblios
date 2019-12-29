import colors from './colors';
import {
    getType
} from './helpers';

it('should return the correct type', ()=>{
    expect(getType('normal')).toEqual(colors.blue05);
    expect(getType('alert')).toEqual(colors.orange05);
    expect(getType('caution')).toEqual(colors.yellow05);
    expect(getType('disabled')).toEqual(colors.gray05);
    expect(getType('warning')).toEqual(colors.red05);
});