const array=[]

//%DebugPrint(array)  
// this will run in v-8 engine and will give all properties of arrays.
/*

-------------< Types Of Arrays -----
#1.continuos And <>#2.Holey Arrays

holey arrasy are like array=[1,2,,3,4]

There is optimization of Arrays in every engine and language like cpp,js,python etc. In JS the arrays are optimized by following three we can say types or methods:

<>#1SMI  (small Integer)
<>#Double  (float,string,function)
<>Packed Element 

*/
let basic=[1,2,3,4,5]//packed SMI element and that is best type of array for optimization
const holey=[1,2,,4,5]//packed holey element
basic.push(6.0)//packed DOuble element and it can be reversed into packed SMI either we delete 6 from that array it will remain as double packed element and same happen while conversion of SMI or Double to packed or holey elements is irreversible

let packed=[1,2,3,6.0,'7']// now this becomesonly packed Elements and its optimization is different from others

basic[11]=11// now this array will become holey Elements as it have more empty spaces 
// and if we wnat toa ccess the value of array at empty index it will return as undefined abd same happen when we put index of array greater than its length and that operation (holey elements) is costly.

// bound check. if we goes out of scope that it return it as undefined as tells it is out of index value

/*
------------< Holes are expensive >----------
because when there is a hole in array we have to do following operation due to prototypal nature of js while accessing the index that has no value (empty)

#1<>   bound check
#2<>   hasOwnProperty(arrayname,index value(that is empty or returnning undefined))
#3<>    hasOwnProperty(arrayname.prototype,10)
#4<>    hasOwnProperty(object.prototype,10)

because all above methods run one by one and check again and again so optimization is not maintained

--------------< optimization trend >------------

optimization----> decreasing

SMI > DOUBLE > PACKED > H_SMI > H_DOUBLE >H_PACKED
*/

let array2= new Array(3)
// noww this will be recognised as H_SMI-ELEMENTS

array2[0]='1'
array2[1]='2'
array2[2]='3'
// even though there is not empty spacd but it will be present as holey double but there is a way that we can prevent from this mistake

let array3=[]// this will be recognised as packed elements
array3.push('1')//packed elements
array3.push('2')//packed elements
array3.push('3')//packed elements