const sym1 = Symbol('a');  // these two Symbols are unique internally
const sym2 = Symbol('b');

sym1 === sym2 ? console.log(true) : console.log(false);


// why we use
// application 1
    // this is basically a contrived example
    const symId1 = Symbol();
    const user = {
        id : 12345,
        name : 'XYZ',
        [symId1] : 234567
    }


    console.log(user[symId1]);
    const symId2 = Symbol('id');
    user[symId2] = 12345678;

    console.log(user);


    console.log(Object.getOwnPropertyNames(user)); // Symbols are not obvious
    console.log(Object.getOwnPropertySymbols(user));

    for(let key in user) {
        console.log(key); // symbols are not visible
    }


    const sym3 = Symbol.for('data');
    const sym4 = Symbol.for('data');


    console.log(sym3, sym4);
    sym3 === sym4 ? console.log(true) : console.log(false);