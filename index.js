// const driver = {};

// function updateDriverWithKeyAndValue(object, key, value){
//     return Object.assign({}, object, { [key]: value })
// };


// function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
//     object[key] = value;
//     return object;
// };

// function deleteFromDriverByKey(object, key){
//     var newObj = Object.assign({}, object)
//     delete newObj[key]
//     return newObj
// };

// function destructivelyDeleteFromDriverByKey(object, key){
//     delete object[key];
//     return object
// };



const driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

function deleteFromDriverByKey(obj, key){
    const newObj = Object.assign({}, obj)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key]
    return obj
}






































