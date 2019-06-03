const fs=require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const data=dataBuffer.toString();
const user=JSON.parse(data);
console.log(user);
user.name='Another title';
user.planet='Mars';
user.age=45;
const jsoner=JSON.stringify(user);

console.log(jsoner);
fs.writeFileSync('1-json.json',jsoner);