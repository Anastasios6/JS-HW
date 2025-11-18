const phones = ["iphone", "samsung", "huawei", "xiaomi", "nothing phone", "motorola"]
function printPhones(tel, index) {
    console.log(`${index}: ${tel}`);
}
phones.forEach((tel, index) => printPhones(tel, index));
phones.forEach((tel, index) => {
    console.log(`${tel}: ${index}`);

})
const uppercasePhones = phones.map(phones => phones.toUpperCase());

console.log(uppercasePhones);

console.log("-----------------");

const numbers = [1, 5, 8, 10, 15, 20];
const x = 8;


const filteredNumbers = numbers.filter(element => element > x);

console.log(filteredNumbers);

console.log("-----------");


const complexObj = [
    {
        name: "Samsung",
        model: "s25",
        cameras: 3,
    },
      {
        name: "Iphone",
        model: "16",
        cameras: 2,
    },
      {
        name: "Xiaomi",
        model: "13 pro",
        cameras: 3,
    },
      {
        name: "Huawei",
        model: "P20 pro",
        cameras: 3,
    },
      {
        name: "Nothing phone 3a Pro",
        model: "phone 3(a) Pro",
        cameras: 4,
    },
     {
        name: "Nothing phone 3 a lite",
        model: "phone (3a) lite",
        cameras: 3,
    }

]
console.log(complexObj);

const filteredMapped = complexObj;
const arr = complexObj
.filter ((phone) => phone.name.includes("Nothing phone"))
.map ((product) => {
    return {
        name: product.name,
        cameras: product.cameras
    }
})
console.log(arr);


console.log("-------------");


