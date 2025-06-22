type Item = {
    id: number;
    name: string;
    author: string;
};

let item: Item = {
    id: 1008,
    name: "Буклет",
    author: "Дмитрий",
};

const ourArray: (string | number)[] = [];
function addArray(item: Item): (string | number)[] {
    ourArray.push(...Object.values(item));
    return ourArray;
}

console.log(addArray(item));