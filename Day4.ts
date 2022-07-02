const last = <T>(arr: T[]): T => {
    return arr[arr.length-1];
};
  
const prepend = <V, M>(arr: V[], item: M): V[] => {
    arr.unshift(item);
    return arr;
};
  
const arr = [1, 2, 3, 4, 5]

console.log(last(arr))
  
console.log(prepend(arr, 1))
  
console.log(typeof(arr))