const users = [
    {
        index: 0,
        isActive: true,
        balance: '2226.60',
        name: 'Eugenia Sawyer',
        gender: 'female',
        phone: '+1 (840) 583-3207',
        address: '949 John Street, Rose, Puerto Rico, 1857',
    },
    {
        index: 1,
        isActive: true,
        balance: '2613.77',
        name: 'Pauline Gallegos',
        gender: 'female',
        phone: '+1 (985) 593-3328',
        address: '328 Greenpoint Avenue, Torboy, North Dakota, 6857',
    },
    {
        index: 2,
        isActive: false,
        balance: '3976.41',
        name: 'Middleton Chaney',
        gender: 'male',
        phone: '+1 (995) 591-2478',
        address: '807 Fleet Walk, Brutus, Arkansas, 9783',
    },
    {
        index: 3,
        isActive: true,
        balance: '1934.58',
        name: 'Burns Poole',
        gender: 'male',
        phone: '+1 (885) 559-3422',
        address: '730 Seba Avenue, Osage, Alabama, 6290',
    },
    {
        index: 4,
        isActive: true,
        balance: '3261.65',
        name: 'Mcfadden Horne',
        gender: 'male',
        phone: '+1 (942) 565-3988',
        address: '120 Scholes Street, Kirk, Michigan, 1018',
    },
    {
        index: 5,
        isActive: false,
        balance: '1790.56',
        name: 'Suzette Lewis',
        gender: 'female',
        phone: '+1 (837) 586-3283',
        address: '314 Dunne Place, Bawcomville, Guam, 9053',
    },
];

let phones = [];
let totalBalance = 0;
users.forEach((item) => {
    item.balance = parseFloat(item.balance);
    totalBalance += item.balance;
    if (item.balance > 2000) {
        phones.push(item.phone);
    }
})

console.log(phones);
console.log(totalBalance);