const employee = {
    name: 'Selin',
    streetAddress: 'Istanbul',
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
    };
};
// console.log(updateEmployeeWithKeyAndValue(employee, "key2", "1"));

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]= value;
    return obj;
};
// console.log(updateEmployeeWithKeyAndValue(employee, "name", "Beyza"));

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
};
// console.log(updateEmployeeWithKeyAndValue(employee, "name",));

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj;
};