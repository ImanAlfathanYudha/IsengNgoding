// function which find number
function singlenumber(a,N)
{
 
    // umap for finding frequency
    let fmap=new Map();
    let result = []
    // traverse the array for frequency
    for(let i = 0; i < N;i++)
    {
        if(!fmap.has(a[i])){
            fmap.set(a[i],0);
        } else { 
          fmap.set(a[i],fmap.get(a[i])+1);
        }
    }
    
    // iterate over the map
    for(let [key, value] of fmap.entries())
    {
        
        // check frequency whether it is one or not.
        if(value==0) {
            // return it as we got the answer
          result.push(key)
        }
    }
    return result
}
 
// Driver code
 
// given array
let a = [12, 1, 12, 3, 12, 1, 1, 2, 3, 2, 2, 3, 7];
 
// size of the array
let N = a.length;
 
// printing the returned value
console.log("The element with single occurrence is "+singlenumber(a,N));