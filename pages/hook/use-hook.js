export const FilterArray = (data = [], ObjectDataKey = '', dataFilter = '') => {
    if(dataFilter != '') {
        return data.filter(ele => ele[ObjectDataKey].indexOf(dataFilter) > -1);
    } else {
        return data;
    }
}