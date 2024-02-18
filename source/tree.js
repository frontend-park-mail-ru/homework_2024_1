'use strict';
const tree = (number) => {
    if (number<3 || number!=Math. trunc(number) || number.isNaN){
        return null
    }

    let answer = ''
    let star = 1
    for (let i = 0; i < number-1; i++) {
        answer+=' '.repeat(number-2-i) +  '*'.repeat(star) + ' '.repeat(number-2-i) + '\n'
        star+=2
    }
    answer+=' '.repeat(star/2-1) + '|' + ' '.repeat(star/2-1) + '\n'

    return answer;
}

