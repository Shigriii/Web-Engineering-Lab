function doubleArrayElements(arr) {
   
    let doubledArray = [];

    
    for (let i = 0; i < arr.length; i++) {
        
        doubledArray.push(arr[i] * 2);
    }

    
    return doubledArray;
}


let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubledArray = doubleArrayElements(Array);

console.log("Original Array:", Array);
console.log("Doubled Array:", doubledArray);