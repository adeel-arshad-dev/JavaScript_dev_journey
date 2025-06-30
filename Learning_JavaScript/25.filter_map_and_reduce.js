//  -----------< Filetr() >------------

const lang=["js","cpp","java","python","ruby"]

// as we have learned that forEach function prints each value of array. But if use it for returning values it fails to do that.
/*

let newlang=lang.forEach((item)=>{
    return item
})
    it will return nothing 
*/
// ----< but we can do that with the help of filter()>-------
const newarray=[1,2,3,4,5,6,7,8,9,10]
let returnedAraay=newarray.filter((num)=> num>5 )//  recall the concepts of return using the arrow function. And filter Functoin also takes call back function.
console.log(returnedAraay);// will print numbers greater than 5

// <if we want to do same task with the forEach function you can do that by following method
const numArr=[]// first use empty array for pushing
newarray.forEach((item)=>{
if(item>4){
    numArr.push(item)
}
})// this will print the same result

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 2000, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  // if we have to filter out the books of history than
  let filteredElement=books.filter((bk)=>{
 return bk.genre==="History"
  })
  //console.log(filteredElement);// will print detail of two books

  // if we have to print out the books that are published after 1995 than

  filteredElement=books.filter((bk)=>{
 return bk.publish>=1995
  })
//   console.log(filteredElement);

// if we have to filter the book that is of history and published after 2000 than
filteredElement=books.filter((bk)=>{
 return bk.publish>=2000 && bk.genre==="History"
  })
  console.log(filteredElement);

  // -----------< map() >-----------

  let numbers=[1,2,3,4,5,6]
  let newnum=numbers.map((nums)=>{// map also takes call back functions
    return nums+10 // it will add 10 to the each value of numbers Array map() perforn operation with each member of array there is no condition checking like in filter(). and this function returns its value so we have to store its value ina  avariable

  })
  console.log(newnum);
  
  /*
  ------< chaining >
  we can use 2 or 3 function consecutively to eachOther and that process is called chaining. <Chaining>-------

  */
  let newn=numbers
                .map((item)=> item *10)// #1
                                        .map((val)=> val+1)// #2
                                                        .filter((number)=> number>=30)// #3
    console.log(newn);
    /*
    #1 will update value of each element by multiplying with 10 and than value will be passed to #2 it will add 1 to each updated element. at last #3 will sort out on the base of conditions that we have provided to it.
    */

    // -----------< reduce() >------------

    /*
    syntax of reduce():
    it takes accumulator,current value. accumulator is initialised first than it is used while the current val is of array. so at the end by putting comma we have to initialise the accomulator.It takes a call back function aslo and return a value.

    let sum= array.reduce(function(accomulator,currentvalue){
    return accomulator+currrentvalue
    },0-> it is initialisation of accumolator)

    */
    let redArra=[1,2,3,4]
   let reducedArr= redArra.reduce(function (acc,currval){
 return acc+ currval
    },0)
    console.log(reducedArr);// sum of all members of arrays will be given

//   let newa=  redArra.reduce((val,current)=>{
// return val+current

//     },10)
// we can do the same by following that syntax
  let newa=  redArra.reduce((val,current)=> val+current,10)// 10 is initial value of the accomulator

    console.log(newa);
    // using shopping card let's use this concept
    let shoppingcard=[
        {
            coursename:"Js",
            price:999,
        },
        {
            coursename:"python",
            price:599,
        },
        {
            coursename:"Mern Stack",
            price:7999,
        },
        {
            coursename:"Data Science ",
            price:12999,
        },
    ]// we have to add price of user shopping

   let priceToPay= shoppingcard.reduce((acc,item)=>acc + item.price ,0)
   console.log( `You have perchased courses of ${priceToPay}`);
   
