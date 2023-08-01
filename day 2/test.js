const numbers = [2, 3, 1, 4, 5, 9 ,11 , 20, -1, -2]

numbers.forEach(number => { //element là biến đại diện cho phần tử trong mảng để thao tác
    console.log(number);
})

const evenNumbers = numbers.filter(number => {
    return number % 2 === 0
    //như kiểu if even -> true 
    //odd -> false
})


const num = numbers.filter(number => {
    return number <= 5
})

const firstNegNumber = numbers.find(number => { //chỗ này mà findOf thì nó trả ra index
    return number < 0;
})






console.log(evenNumbers);
console.log(num);
console.log(firstNegNumber);


