'use strict';

//////////////////////////////////////////////////////////
// What is Object-Oriented Programming?
//////////////////////////////////////////////////////////

//see pdf lecture

// Well, object-oriented programming,
// or OOP in short,
// is a programming paradigm that is based
// on the concept of objects.
// And paradigm simply means
// the style of the code,
// so the how we write and organize code.
// Now we use objects to model,
// so to describe aspects of the real world,
// like a user or a to-do list item,
// or even more abstract features
// like an HTML component
// or some kind of data structure.

// So we can say that by using objects,
// we pack all the data
// and the corresponding behavior
// all into one big block.
// So again, that's data and corresponding behavior.
// And this makes it super easy
// to act directly on the data.

// But anyway, why does OOP actually exist?
// Well, this paradigm was developed
// with the goal of organizing code,
// so to make it more flexible
// and easier to maintain.

// OOP is probably the most popular
// and most widely used programming paradigm
// in large scale software engineering.
// Now, OOP is certainly not the only way
// of writing organized and maintainable code.

// So in fact, there're many other paradigms
// that have become increasingly popular
// and one of them is functional programming.
// And functional programming allows us
// to achieve the exact same goal
// of basically avoiding spaghetti code.

// So again, an instance is a real object
// that we can use in our code,
// which was created from a class,
// and a class itself is not an object.

// So back to the blueprint analogy from earlier,
// this instance is like a real house,
// which was created from the abstract blueprint
// created by the architect.

// And the beauty of this is that now
// we can use this class to create as many instances
// as we need in our application.
// Just like we can build multiple houses
// from just one blueprint, right?

///////===========
// The 4 fundamental OOP Principles

// So now we know that we can create classes
// to generate objects from these classes.
// So we know how classes work,

// but the next logical question is,
// how do we actually design a class?

// Or in other words,
// how do we actually model
// real-world data into classes?

// So these questions are just
// like an architecture student asking,
// well, how do we actually plan
// and design a house?

// And that's of course a very good question.
// Now the answer is, as you can imagine,
// not straightforward.
// So there is not a single correct way
// of designing classes.

// There are, however, four fundamental principles
// that can guide us toward a good class implementation.

// And these principles are abstraction, encapsulation,
// inheritance, and polymorphism.

//===
// 1) abstraction,

// And abstraction basically means
// to ignore or to hide details
// that don't matter.
// This allows us to get an overview perspective
// of whatever it is that we're implementing
// instead of messing with details
// that don't really matter to our implementation.

// So let's say that we're implementing a phone
// for a user to use.
// And even though this doesn't make much sense in code,
// it's still a great example and analogy.
// So without abstraction
// we could design our class
// to include everything that there is about the phone,
// including all the internal stuff
// like verifying the phone's temperature and voltage,
// turning on the vibration motor or the speaker,
// and other low-level details.

// But as a user interacting with a phone,
// do we really need all of this detail?
// Well, I guess not.
// Right?
// So in reality, when we interact with a real phone,
// all of these details have been abstracted away
// from us as the user.
// And all that we're left with is a simple phone
// that we basically only interact with
// using the home button,
// volume buttons and the screen.
// Everything else is gone
// because we simply don't need it as a user.
// So the phone then operates kind of as a black box,
// without us seeing what is happening inside.

// Now, of course, internally
// the phone still needs to vibrate
// and to measure the voltage
// or to turn on the speaker,
// but we can hide these details from the user.
// And that is exactly what abstraction means.

// Now, going back to the example
// of a user from the last slide,
// we could implement a user's phone number,
// mailing address, hair color, shoe size,
// and tons of other stuff
// that we might not need in our application.
// So we simply ignore these details.

// Now, abstraction is really important,
// not just in OOP,
// but in programming in general.
// In fact, we create and use abstractions
// all the time.

// For example, take the add event listener function
// that we use all the time.
// Do we actually know how exactly it works
// behind the scenes?
// Well, we don't.
// And do we care?
// No, not really.
// Right?
// And we don't have to because once more,
// the low-level details of how exactly it works
// has been obstructed away from us.
// We are simply the user.
// And so we can simply use that function
// without completely understanding it
// and without having to implement it ourselves.

///====
// 2) encapsulation,

// And encapsulation basically means
// to keep some properties
// and methods private inside the class
// so that they're not accessible
// from outside the class.

// However, some methods can, of course,
// be exposed as a public interface,
// which we call API.
// And this is exactly what I meant
// at the beginning of the lecture
// when I said that interactions between objects
// happen through a public interface.

// And going back to our example of a user from before,
// this is what private properties
// might look like conceptually.

// And again, I'm talking hypothetical here
// because this private keyword here
// actually does not exist in JavaScript.

// But anyway, as we already know,
// outside code now can't access these properties.
// However, inside the class,
// they are still accessible.

// For example, the password is, of course, necessary
// in the login method, right?

// And so there we can use it.
// And by having these critical properties
// nicely encapsulated like this,
// we prevent external code
// from accidentally manipulating this internal state.
// And by the way, the term state simply refers
// to an object's data.
// Okay.

// Anyway, this is really important
// because allowing external code
// to manipulate internal state directly
// can cause many kinds of bugs,
// especially in large code bases
// and developer teams.

// Now, as you see, there's also a private method here,
// the check spam method.
// Again, it's not accessible from outside a class,
// but it's used internally
// to check if a comment is spam or not.

// So we want no one else outside of the class
// to be able to use this method,
// and so basically we don't make it
// part of the public interface.
// So the public interface
// is essentially all the methods
// that are not private,
// so that are not encapsulated.

// So making methods private
// makes it easier for us to change our code
// without breaking code from the outside,
// which might rely on some of these methods.

// For example, if the check spam method was public,
// then it could be used anywhere in our code.
// And if we then changed the implementation of the method,
// it might break that code that is relying on it.
// So again, this helps avoiding bugs
// and also spaghetti code.

// And really this is not just some theory,
// this is a real practical scenario.
// Alright.
// So there is a real reason why encapsulation
// and private methods and properties exist.
// So in summary, we should always have the goal
// to nicely encapsulate most of our state and methods
// and only leaving essential methods public
// for the reasons that I just explained.

/////=======

// 3) inheritance,

// Next up, we have inheritance.

// So let's say we have these two classes,
// user and admin,
// which stands for administrator.

// And as we can see, they have actually
// a lot in common.
// In fact, admin has all the properties
// and methods that user has.
// Right?

// And that actually makes sense
// because if you think about it,
// an admin is also a user.
// So an admin also needs a password and an email,
// and he also needs to log in, for example.

// However, if we design our classes like this,
// so as two separate identities,
// we will end up with a lot of duplicate code
// and we already know that that's bad.
// Right?

// But well, that's where inheritance
// comes into play.
// So in OOP, when we have two classes
// that are closely related,
// like user and admin here,
// we can have one class inherit from the other.
// So we will have one parent class
// and one child class, and the child class
// then extends the parent class.
// Okay, great.

// But what does all of that actually mean?
// Well, it's actually quite intuitive, I think.
// So just like you as a child
// probably inherited some features of your parents,
// a child class inherits all the properties
// and methods from its parent class.
// Now, in more formal terms,

// inheritance makes all properties and methods
// of a certain class available to a child class,
// which of course then forms a hierarchy
// between these two classes.
// And the goal of this is to reuse logic
// that is common to both of the classes.
// In this case, both the admin
// and the user need to log in.
// And so instead of writing that logic twice,
// it makes sense to inherit the login method
// from the more global class,
// which is the parent class user,
// to the more specific class,
// which is the child class admin.

// Now of course a child class can then also have
// its own methods and properties.
// So at the end of the day,
// the child class ends up with some methods
// and properties from its parent
// and some of its own.

// So we can say that the admin is also a user,
// but basically an extended user,
// so with some added functionality.

//======
// 4) polymorphism.

// And finally, the last principle is polymorphism.
// And polymorphism sounds a bit weird,
// which is because it comes from Greek,
// where it literally means "many shapes".

// Now, in the context of OOP,
// in simple terms, polymorphism means
// that a child class can overwrite a method
// that it inherited from a parent class.
// And here are our user and admin classes again.
// But now we also have a third class,
// which is the author.
// Now admin and author are both
// really just special kinds of users,
// and so it makes sense that they both inherit
// from the user class,

// just like we studied in the last slide.
// Therefore, they inherit all the properties
// and methods from the user class,
// but we're gonna focus on the login method now.

// Now let's say that an admin requires
// a different kind of login method.
// For example, a more secure one,
// which has two-factor authentication.

// And let's say that we also need
// a special login method for authors.

// So how do we give them different login methods?
// Well, it's actually quite simple.
// In each class we simply just write a new method,
// which is also called login.

// And then, according to polymorphism,
// that login method will overwrite
// the login method that has been inherited
// from the user class.
// And that's actually it.
// That's all you need to know about polymorphism.

//////////////////////////////////////////////////////////
// OOP in JavaScript
//////////////////////////////////////////////////////////

// And in this lecture, we will learn about OOP
// specifically in JavaScript.
// So, how it's different from the more traditional OOP
// and also different ways
// of implementing this paradigm in JavaScript.

// And remember, a class is like a blueprint
// which is a theoretical plan
// and that we use to build many houses in the real world.
// And in the same way,
// the theoretical class can be used to create actual objects
// which are called instances
// and which we can then use in our cout.
// And this process of creating an instance
// is called instantiation.

// Now earlier, I said that in JavaScript
// things work a bit differently.

// So why did I first tell you about classes and instances?
// Well, it's because we do have similar concepts in JavaScript
// and so it's very useful
// to first understand the class instance model.

// Plus, many people also just use this terminology
// in the context of JavaScript.

// And finally, JavaScript syntax itself
// uses also some of these terms for example, instances.
// And so, you really need to know
// what a class is and what an instance is.

//===
// Now, anyway, how does OOP actually work in JavaScript?
// Well, in JavaScript we have something called prototypes
// and all objects in JavaScript
// are linked to a certain prototype object.

// So we say that each object has a prototype.
// And now here comes the magic.
// So, the prototype object contains methods and properties
// that all the objects that are linked to that prototype
// can access and use.

// And this behavior is usually called prototypal inheritance.
// So, again, prototypal inheritance means that all objects
// that are linked to a certain prototype object
// can use the methods and properties
// that are defined on that prototype.

// So basically, objects inherit methods and properties
// from the prototype which is the reason why this mechanism
// is called prototypal inheritance.

// Just note that this inheritance is actually different
// from the inheritance that we talked about
// in the last lecture.
// So that was one class inheriting from another class.

// But in this case,
// it's basically an instance inheriting from a class.
// So that's very different
// and so keep that in mind
// or maybe in your notes.

// Now we can also say that objects delegate behavior
// to the linked prototype object.

// And behavior is just another term for methods here.

// So besides prototypal inheritance,
// we also call this mechanism, delegation.

// And that's also the reason why
// this arrow is pointing upwards
// because technically, objects delegate their behavior
// to the prototype.

// On the other hand, in classical OOP with classes,
// the behavior, so the methods, are actually copied
// from the class to the object
// and so that is completely different.

///====
// 3 ways of implementing prototypel
// inheritance in javascript

// how do we implement Object-Oriented Programming
// in JavaScript in practice?

// Well, in JavaScript there are actually three different ways
// of doing all this: the constructor function technique,
// ES6 classes and also the Object.create().

//===
// 1) constructor function

// So first, constructor functions are a way
// of creating objects programmatically,
// using a function which will also set
// the new object's prototype.

// And this is actually how built-in objects like arrays
// or maps or sets are implemented.
// Also, this is how OOP has been done in JavaScript
// basically since the beginning.

//==
// 2) ES6 classes

// Next, the ES6 release introduced classes into JavaScript.
// And so now, ES6 classes are actually the more modern way
// of doing OOP in JavaScript.

// However, keep in mind that these are actually
// not the kind of classes that we talked about
// in the last lecture and in the last slide.
// They are instead just so called 'synthetic sugar'
// over constructor functions.

// So this means that ES6 classes are basically just
// a layer of obstruction over constructor functions.
// So, it's really just a nicer syntax
// that makes it easier for newcomers to do OOP in JavaScript.

// But behind the scenes, ES6 classes are actually implemented
// with constructor functions.
// And so they also use prototypal inheritance
// just like we learnt in the last slide.

// 3) Object.create().

// Finally, there's also the object.create()
// which is basically the easiest and most straightforward way
// of linking an object to a prototype object.

// However, it's not as used as the other two methods

//==
// Now, to finish, one important thing to keep in mind
// is that the four principles of Object-Oriented Programming
// that we learnt in the last lecture,

// so that's obstruction, encapsulation, inheritance
// and polymorphism are still valid and important
// with prototypal inheritance.
// And throughout this section,
// we will of course learn how to use
// and implement these principles.

////////////////////////////////////////////////////////////////////
// Constructor Functions and the new Operator
////////////////////////////////////////////////////////////////////
// So, we can use constructor functions,
// to build an object using a function.
// Now, a constructor function is actually
// a completely normal function.
// The only difference between a regular function,
// and a function that we call constructor function,
// is that we call a constructor function
// with the new operator.

//  in OOP there is this convention
// that constructor functions always start
// with a capital letter.
// And so we should always follow that convention too.

// Now an arrow function will actually not work
// as a function constructor.
// And that's because it doesn't have its own this keyword

// So only function declarations and function expressions.
const Person = function (firstName, birthYear) {
  // And now let's use this knowledge to our advantage.
  // Because we already know that in the end of this function,
  // the this keyword will basically be returned.
  // And so whatever we add to that empty object,
  // will then be returned from the function.
  // And that returned object, is gonna be the object,
  console.log(this);

  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this

  //   You should never create a method
  // inside of a constructor function.
  // That's because imagine we were gonna create a hundred
  // or thousands or even tens of thousands
  // of person objects using this constructor function.

  // Then what would happen,
  // is that each of these objects
  // would carry around this function here.
  // So if we had a thousand objects,
  // we would essentially create a thousand copies
  // of this function.
  // And so that would be terrible
  // for the performance of our code.

  // Again, don't do this.
  // But instead to solve this problem,
  // we are gonna use prototypes and prototype inheritance
  //====
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

// the only difference between a regular function,
// and a constructor function is that we call the constructor
// using the new keyword.

// So this new operator here,
// is actually a very special operator
// because what it does is to call this function here.
// So this person function,
// but it does a whole lot more than just that.

const jonas = new Person('Jonas', 1991);

// So let's see what exactly happens when we call a function
// with the new operator like this.
// So behind the scenes, there have been four steps.

// 4 steps

//==
// 1) New {} object is created

// then afterwards the function is called
// and in this function call the this keyword will be set
// to this newly created object.
///====
// 2) function is called, this = {}

///====
// 3) {} linked to prototype

//====
// 4) function automatically return {}
// Finally, the last step,
// is that the object that was created in the beginning
// is then automatically returned
// from the constructor function.
// So the function automatically returns
// that empty object from the beginning.
// But actually at this point,
// the object no longer needs to be empty.
// And this is actually the trick
// of making the constructor function work.

console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

// Now remember from one of the previous lectures,
// that in classical object oriented programming,
// an object created from a class is called an instance,
// right?

// Now we didn't technically create a class here
// because as we discussed before,
// JavaScript doesn't really have classes

// in the sense of traditional OOP.
// However, we did create an object
// from a constructor function.
// And actually three objects, right?

// And constructor functions have been used
// since the beginning of JavaScript
// to kind of simulate classes.
// And so therefore we can still say
// that Jonas here is an instance of person
// and the same goes for Matilda and for Jack here.

const jay = 'jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

///////////////////////////////////////////////////////////
// Prototypes;
///////////////////////////////////////////////////////////

// But now we're gonna talk about prototypes.
// So actually, we talked about prototypes,
// prototypal inheritance and delegation earlier already.

// But how does all of that actually work?

// Well, it can be summarized like this.
// So, first each and every function in JavaScript
// automatically has a property called prototype.
// And that includes, of course, constructor functions.
// Now every object that's created
// by a certain constructor function
// will get access to all the methods and properties
// that we define on the constructors prototype property.
console.log(Person.prototype);

// So again, as I was just saying,
// all the objects that are created
// through this constructor function here
// will inherit,
// so they will get access
// to all the methods and properties
// that are defined on this prototype property.

// Because now there exists only one copy
// of this function.
// So only one of them exists,
// but then all of the objects that are created
// using this constructor function
// can basically reuse this function
// on themselves.
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// So we can now use this method here
// on the Jonas object
// even though it is not really
// on the object itself, right?

// So if we check our Jonas here,
// then you see that it contains of course
// the birth year and the first name,
// but it does not contain the calcAge method.
// But still, we have access to it
// because of prototypal inheritance.
jonas.calcAge();
matilda.calcAge();

// But how and why does this actually work?
// Well, it works because any object always
// has access to the methods and properties
// from its prototype.
// And the prototype of Jonas and Matilda
// is person dot prototype.
// And we can actually confirm that
// because each object has a special property
// called a underscore underscore proto.
console.log(jonas.__proto__);

// should this prototype property here
// not be the prototype of person?
// Well, actually, no.
// So this is the confusing part.
// So person dot prototype here
// is actually not the prototype of person.
// But instead, it is what's gonna be used
// as the prototype of all the objects
// that are created with the person constructor function.
// So that's a subtle but important difference
// that you need to keep in mind.
console.log(jonas.__proto__ === Person.prototype);

// So this confirms one more time
// that person dot prototype
// is indeed the prototype of Jonas, matilda and jack.
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jack));

// But person dot prototype
// is not the prototype of person.
console.log(Person.prototype.isPrototypeOf(Person));

// So the fact that it's called prototype
// kind of implies that this is the prototype of person,
// but as we just learned, it is actually not.
// Probably shouldn't be called prototype
// but instead something like prototype of linked objects
// or something like this.
//===
// . protoTypeOfLinkedObjects
//===
// So if this makes it easier
// you can think of the prototype property
// as prototype of linked objects property.
// Even though of course it's not called like this,
// but this would be a more honest name.
// So take some time to really understand
// what the prototype of what object actually is here.

//==

// Now, anyway, where does this proto,
// property here, on the Jonas object
// actually come from?
//==
// jonas.__proto__

// Well, remember the new operator
// that we talked about before,
// well, it contains this step number three
// which links the empty new object
// to the prototype.
// //===
// // 3) {} linked to prototype
// ///===
// And so basically, it is this step number three
// which will create this proto property.
// So it creates this proto property

// and it sets its value to the prototype property
// of the function that is being called.
// And so that's exactly what is written here, right?
// So again, it sets the proto property
// on the object to the prototype property
// of the constructor function.

// And so this is how JavaScript knows internally
// that the Jonas object is connected
// to person dot prototype.
// And in fact, when we check out
// the Jonas object here
// we can indeed also see that property in here.
// So it's also right here,
// and if we open that up,
// then you see exactly person dot prototype
// which contains this calcAge function, all right?

// So I'm spending a lot of time here
// for you to really understand
// what this proto property here is
// and what the prototype of the constructor is
// and how they are all linked
// because this is one of the most important things,
// and also one of the most difficult things
// to understand in JavaScript.

/////====
// of hearing the word prototype
// but I just wanted to quickly show you

// that we can also set properties on the prototype.
// And so not just methods.
Person.prototype.species = 'Homo Sapiense';
console.log(jonas.species, matilda.species);

// so the species on both of them
// and actually not directly here
// but indeed they will be here
// in this prototype.

// And so, we will be able to do Jonas dot species
// and Matilda dot species.
// And both of these objects will then inherit
// so they will get access to this property
// from the prototype.

// So, you see, in both cases,
// we indeed get Homo Sapiens.
// Now however, since when we take a look
// at these objects,

// well, as we just saw this property is not really
// directly in the object,
// so it's not its own property.

// So own properties are only the ones
// that are declared directly on the object itself.
// So, not including the inherited properties.

///===
// And actually in JavaScript, there is a way
// of checking for that.

console.log(jonas.hasOwnProperty('firstName')); //true

console.log(jonas.hasOwnProperty('species'));
//false
// And again, that's because this property
// is not really inside of the Jonas object.
// It simply has access to it
// because of its prototype.

// So because it's in the prototype property of person.
// And sometimes, this method here
// can be quite helpful in certain situations.
