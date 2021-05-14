const userDetails = [
    {
        "userName": "Chris",
        "userId": 101,
        "phoneNumber": 6203770316,
        "age": 21,
    },
    {
        "userName": "Ron",
        "userId": 102,
        "phoneNumber": 6203270316,
        "age": 19,
    },
    {
        "userName": "Tom",
        "userId": 103,
        "phoneNumber": 6212770316,
        "age": 12,
    },
    {
        "userName": "Harry",
        "userId": 104,
        "phoneNumber": 6203777316,
        "age": 10,
    },
    {
        "userName": "Steve",
        "userId": 105,
        "phoneNumber": 6261770316,
        "age": 70,
    }

];

user = () => {
    // console.log(Object.values(userDetails));
    const userInput = prompt("Please enter your userId");
    for (let k in userDetails) {
        // console.log(userInput);
        for (let i in Object.values(k)) {
            //console.log(Object.values(userDetails[i]));
            for (let j of i) {
                let c = [] = Object.values(userDetails[j]);
               console.log(c);
                for (let m of c) {
                    if (m === userInput) {
                        console.log('kch bi');
                        return                    }
                    return;
                }
            }
        }
    } 
}

// const userInput = prompt("Please enter your userId");
const display = user();
console.log(`Username is ${display}`);








