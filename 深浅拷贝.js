document.getElementById("button1").onclick = function () {
    console.log(1111)
}


function deepcopy(oldObj) {
    var newObj = {};
    for (var key in oldObj) {
        if (typeof oldObj[key] === 'object') {
            newObj[key] = deepcopy(oldObj[key])
        } else {
            newObj[key] = oldObj[key];
        }
    }
    return newObj;
}

var obj = {
    name: 'zeller',
    a: {
        a: 'run',
        b: 'jog'
    },
    c: {
        c: 'go'
    }
}

function shallowCopy(oldObj) {
    var newObj = {};
    for (var key in oldObj) {
        if (oldObj.hasOwnProperty(key)) {
            newObj[key] = oldObj[key]
        }
    }
    return newObj;
}