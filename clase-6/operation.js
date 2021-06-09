function max(argument) {
    return Math.max(...argument);
}

function min(argument) {
    return Math.min(...argument);
}

function sum(argument) {
    return argument.reduce((a,b) => a + Number(b) )
}