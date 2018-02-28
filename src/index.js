module.exports = function getZerosCount(number, base) {
    // your implementation

    var simpleMultipliers = [];

    for(let i = 2; i<=Math.floor(Math.sqrt(base)); i++){
        while(base % i == 0){
            simpleMultipliers.push(i);
            base /= i;
        }
    }

    if (base!=1){
        simpleMultipliers.push(base);
    }



    var answer = 0;
    while(number > 0)
    {
        number = Math.floor(number/simpleMultipliers[simpleMultipliers.length - 1]);
        answer += number;
    }

    var amountOfMax = 1;
    for(let j = simpleMultipliers.length; j>=2; j--){
        if(simpleMultipliers[j - 1]==simpleMultipliers[j - 2]){
            amountOfMax++;
        }
        else break;
    }
    return Math.floor(answer/amountOfMax);
}