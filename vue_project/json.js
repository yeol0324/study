// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {console.log(`${this.name} can jump!`)}
    // 함수는 object에 있는 데이터가 아니기때문에 제외됨
    // js자체에 있는 특별한 데이터도 json에 포함되지 않음 ex) symbol
}
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'yurim' : value;
});
console.log(json);


console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj.birthDate.getDate());

rabbit.jump();

// 1. JSON to Object
// parse(json)