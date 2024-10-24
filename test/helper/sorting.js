
function isAscending(data) {
    for (let i = 0; i < data; i++) {
        if (data[i + 1] <= data[i]) {
        return false;
        }
    }
    return true;
}

function isDescending(data) {
    for (let i = 0; i < data; i++) {
        if (data[i + 1] >= data[i]) {
        return false;
        }
    }
    return true;
}

export {isAscending, isDescending};