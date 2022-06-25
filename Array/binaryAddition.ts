const a = [0,0,0,1]
const b = [0,0,1]

const binaryAddition = (a, b, aIndex = a.length -1, bIndex = b.length -1, carry = 0, sum = []) => {
    if (aIndex < 0 && bIndex < 0)
        return sum;

    const n1 = aIndex < 0? 0: a[aIndex], n2 = bIndex < 0? 0: b[bIndex];
    const result = n1 + n2 + carry;

    if (result === 2 || result === 3) {
        sum.unshift(result === 2? 0: 1);
        return binaryAddition(a, b, --aIndex, --bIndex, 1, sum);
    } else {
        sum.unshift(result);
        return binaryAddition(a, b, --aIndex, --bIndex, 0, sum);
    }
}

const resp =binaryAddition(a, b);
console.log(resp);