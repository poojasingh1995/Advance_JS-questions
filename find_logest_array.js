const arr = ['Hello!', 'How are you', 'Can ', 'I use', 'splice method with', ' strings in Js?'];
const findLongestIndex = (arr) => {
   const index = {
   '0': 0
};
// console.log(findLongestIndex(arr))
const longest = arr.reduce((acc, val, index) => {
   const actualLength = val.split(" ").join("").length;
   if(actualLength > acc.length){
      return {
         index,
         length: actualLength
      };
   }
   return acc;
   }, {
      index: 0,
      length: 0
   });
   return longest.index;
};
console.log(findLongestIndex(arr))

// i=0
// k=[]
// len=0
// while (i<arr.length){
//         if (len<arr[i].length){
//            len=(arr[i].length)
//            j=arr[i]
//         }
//         i=i+1
// }
// k.push(j)
// console.log(k)
