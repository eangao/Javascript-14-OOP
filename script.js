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
