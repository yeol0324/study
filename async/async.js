"use strict";

// async & await
// clear style of using promise

//  1. async

// function fetchUser() {
//     // do network request in 10 secs...
//     return new Promise((resolve, reject) => {
//         resolve("ellie");
//     });
//     // 10초가 걸리는데 동기적으로 처리한다면 이 함수를 실행하기 위해 10초를 여기서 머물기 때문에 비동기처리로 다른 것도 수월하게 할 수 있도록 해 줌
// }

async function fetchUser() {
    return "ellie";
}
// function 앞에 async를 붙이면 자동으로 promise가 됨
const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// async 가 붙은 함수에서만 사용 가능
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    // await 뒤에 함수가 끝날 때까지 기다려줌
    return "🍎";
}

async function getBanana() {
    await delay(2000);
    return "🍌";
}

// function pickFruits() {
//     return getApple().then((apple) => {
//         return getBanana().then((banana) => `${apple} + ${banana}`);
//     });
// }
async function pickFruits() {
    const applePromise = getApple();
    const bananaProise = getBanana();
    const apple = await applePromise;
    const banana = await bananaProise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then((fruits) =>
        fruits.join("+")
    );
}
pickAllFruits().then(console.log);
// 모든 프로미스가 받아질 때까지 기다려줌

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
// 먼저 받아지는 데이터 먼저 실행
