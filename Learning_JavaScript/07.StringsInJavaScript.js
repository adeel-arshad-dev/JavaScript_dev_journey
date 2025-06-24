const name="Adeel Arshad";
const age=20;
// the below method is out dated so try to avoid that method
console.log("my name is "+name+".And my age is "+age);
// modern way of concatinnating the string(using tempelate literals(backticks))
console.log(`My name is ${name} and my age is${age}.`);

// other methods of using the string are

const gameName=new String('Adeel Arshad 0786') 
// the above method of declaring the string will return us string with inde values and many prototypes thay we can use like toUppercase,small,trim etc
console.log(gameName[0]);//output:A


"hello".toUpperCase();       // "HELLO"
"HELLO".toLowerCase();       // "hello"
"hello world".includes("lo"); // true
"abc".repeat(3);             // "abcabcabc"
"  trim  ".trim();           // "trim"
"split,this".split(",");     // ["split", "this"]
const newstr="helloworld".substring(0,4)// will give hell not include index value 4

const str = "abc";
str[0];        // "a"
str.charAt(1); // "b"


"abc" === "abc";  // true
new String("abc") === "abc"; // false (object vs primitive)
// when we convet any data type into string it is stored as string not as object
/*

| Type             | Example               | typeof     |
| ---------------- | --------------------- | ---------- |
| String Literal   | `"hello"`             | `"string"` |
| String Object    | `new String("hello")` | `"object"` |
| Coerced String   | `String(123)`         | `"string"` |// coerced mean converted
| Template Literal | `` `hi ${name}` ``    | `"string"` |


*/