function sum(n1,n2){
    if (!n1){
        throw new Error('The first number is invalid');
    }

    if (!n2){
        throw new Error('The second number is invalid');
    }
    return n1 + n2
}

module.exports = {
    sum
}