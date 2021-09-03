const baperTAka = 100000;
function patriChai(age, earning) {
    //console.log(trueAge);
    var dicision = canMarry(15000);
    console.log(dicision);
    console.log(age);
    console.log(earning);

    const trueAge = age + 7;

    function canMarry(expense){
        const remaining = baperTAka +  earning - expense;
        if(remaining > 1000) {
            const showing = 500;
            console.log(showing);
            return true;
        }
        return false;
    }
}
patriChai(21, 50000);