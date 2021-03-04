##### Author: Venkat Subramaniam

- Don't use `var`. Use `const` wherever possible and if not use `let`.
- `let` protects us from defining variables that has been already defined. You can re-assign values if you want to because `let` is mutable but you are not allowed to redefine a variable once you have defined them. 
- `const` is going to protect the reference, it's not going to protect the object that is being referred to.
- `let` allows you to mutate the variable.

How you can protect the object?
- There are two ways:-

1. You can use `Object.freeze()` and can actually freeze the object upon creation. When you do this the object is frozen and the reference is constant as well.

- Object.freeze() is a shallow freeze, it's not a deep freeze.

2. Always use `use strict` in code because it comes to your defense and fails fast and makes the code a lot more safer in that regard.


##### ARGUMENTS:

- arguments is a way in JavaScript that provides `var args`.
- Every Function in JavaScript is a var-arg function. In JavaScript, every function can take variable number of arguments without you say anything.

> quit using `arguments`. Use `Rest (...)` instead.

Why should we not use arguments?

arguments instanceof Array

You cannot call methods of Array(s) on an argument. If you want to use methods of array on an argument we have to first convert the argument into an Array 

`spread(...)` operator is on the sending side. The `spread` operator is not tied to `rest` operator in any way. They are completely independent of each other.

> Anywhere you are using `arguments` already certain replace them with a Rest(...) parameter.

- Being a spread(...) operator, it expects discrete values to be passed in.


##### Default Parameters:

- `Default Parameters` are a nice way for us to extend existing functions to add a new parameter if you really want to do.
- The Default Parameters can actually use values of parameters to it's left. **The default value is not a default value but a default expression**. So that expression is evaluated and that expression can use any parameters
to its left or any parameter in its lexical scope.

- `undefined` will be replaced by the default value.**(Don't do this)**. The reason is if you are receiving object from another function, the object may or may not have that property. When you receive the object from another function and if a property doesn't exist that property is considered to be `undefined`.

- If a property is undefined you can substitute a default value for it very easily because of this feature and that is why they treat `undefined` differently than `null`.



##### Enhanced `for` loops:

- They are the very elegant way to iterate over the collection of data.

`entry` values  gives us the index and the value at that index as an array.


> You can end any structure in JavaScript with a comma (,) if it's a `collection`.



- JavaScript doesn't have the concept of Interfaces as it is dynamically typed in nature. In Pure OOP languages like Java and C# you can use the `iterable` interface if the error occurs for **class.js**. There are two things that Interfaces do:

1. It gives you a collection of methods.
2. Avoid a method name collision.


In JavaScript, we have `primitives`:

boolean, null, number, string, undefined, symbol(special as it is unique).

Because a symbol is unique if you create a method as a symbol then you can enforce that somebody implementing your method there's a guarantee of what they implement. If they implement method with your own symbol because 
symbol gives you uniqueness.


A Symbol can become a `method name` and the reason to do this is it gives us the uniqueness of a method name and it avoids method name collision.

JavaScript has a bunch of predefined Symbols.

[Symbol.iterator]
[Symbol.match] ....



How an iterator actually works?
- When you take an object and use an enhanced for-loop javascript first looks for an iterator. If the iterator is not present it gives you an error 


##### ARROW FUNCTIONS:

An arrow function is nothing but a lambda but it's actually an anonymous function. 

The format of an arrow function is:

(parameter list) => single-line body.

> You can also use multi-line body with parantheses (`{}`) but that is not recommended as a good practice.



###### Semantic difference between an arrow function and a regular function:

Arrow Functions are not stand-in replacement for regular functions.



###### Scoping:
There are two types of scoping:

1. Lexical scoping: A Lexical Scoping is where an unbounded variable is bounded to a definition in the defining scope. In other words you can eyeball the code and find the variable to bind to.

2. Dynamic scoping: A dynamic scope is where an unbounded variable is bound to a variable passed in by the caller of the function. In other words when the variable is unbounded you cannot eyeball the code to find it.

> NOTE: In a regular function, all variables are lexically scoped except `this` and `arguments` which are dynamically scoped. In an arrow function, all variables (including `this` and `arguments`) are lexically scoped.

It makes no sense to write an arrow function for a method of the class because the method of a class requires dynamic binding for this. So if you use an arrow function for a method of a class it's kind of disaster waiting tohappen.


##### DESTRUCTURING:

There are two things that you can do with destructuring i.e.

1. Array Destructuring
2. Object Destructuring
