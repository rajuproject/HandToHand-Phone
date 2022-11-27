import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-20'>
            <h2> 1.) What are the different ways to manage a state in a React application?</h2><br/>
            <p>Therefore, this article will clearly discuss the types of states such as Logical, Server, Form, Navigation, and Browser and the main ways to handle them. Also, it will help 25.12% of the developers who would like to learn React in the future.We have to set initial state value inside constructor function and set click event handler of the element upon which click, results in changing state. Then pass the function to the click handler and change the state of the component inside the function using setState.</p><br/>

            <h2>2.) How does prototypical inheritance work?</h2><br/>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object. getPrototypeOf and Object.The most important difference between class- and prototype-based inheritance is that a class defines a type which can be instantiated at runtime, whereas a prototype is itself an object instance.</p><br/>
            <h2>3.) What is a unit test? Why should we write unit tests?</h2><br/>
            <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex</p><br/>
            <h2>4.) React vs. Angular vs. Vue?</h2><br/>
            <p>Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectivelyOne of the main reasons for the popularity of React is that it works very efficiently with the DOM. Vue also uses the virtual DOM, but compared to React, Vue has better performance and stability. According to this data, Vue and React's performance difference is subtle since it is only a few milliseconds</p><br/>      
        </div>
    );
};

export default Blogs;