import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto my-10 text-left p-3">
      <h1 className="text-2xl text-blue-500 font-bold mt-10">
        Q1: How will you improve the performance of a React Application?{" "}
      </h1>
      <p>
        <b>Ans:</b>{" "}
      </p>
      <div>
        <ul>
          <li>
            <b>1. </b> Using Immutable Data Structures
          </li>
          <li>
            <b>2. </b>Using CSS Animations Instead of JavaScript Animations
          </li>
          <li>
            <b>3. </b>Keeping the component state local where it is necessary
          </li>
          <li>
            <b>4. </b>Performance of a React Application can be improved by
            memoizing the components to prevent unnecessary re-renders
          </li>
          <li>
            <b>5. </b> Using Lazy loading images in React
          </li>
        </ul>
      </div>
      <h1 className="text-2xl text-blue-500 font-bold mt-10">
        Q2: What are the different ways to manage a state in a React
        application?{" "}
      </h1>
      <p>
        <b>Ans:</b> There are four types of state to properly manage in react
        apps:
      </p>
      <ul>
        <li>
          1. <b>Local state</b>{" "}
        </li>
        <li>
          2. <b>Global state</b>
        </li>
        <li>
          3. <b>Server state</b>{" "}
        </li>
        <li>
          4. <b>URL state</b>{" "}
        </li>
      </ul>
      <p>Let's discuss them in brief</p>
      <hr />
      <p>
        {" "}
        <b> Local (UI) state –</b> In Local state data is managed in one or
        another component
      </p>
      <p>
        {" "}
        <b>Global (UI) state –</b> In Global state data is managed across
        multiple components.
      </p>
      <p>
        {" "}
        <b>Server state –</b> Data comming from an external server which must be
        integrated with User Interface state.
      </p>
      <p>
        {" "}
        <b>URL state –</b>Data existing on URLs,which includes the pathname and
        query parameters.
      </p>

      <h1 className="text-2xl text-blue-500 font-bold mt-10">
        Q3:How does prototypical inheritance work?{" "}
      </h1>
      <p>
        <b>Ans:</b>JavaScript uses prototypical inheritance. In prototypal
        inheritance, an object “inherits” the properties from another object via
        the prototype linkage. In JavaScript, objects have a special hidden
        property named <i>Prototype</i> , which is either null or references
        another object. When we read a property from object, and it’s missing,
        JavaScript automatically takes it from the prototype and that's how The
        Prototypical Inheritance works.
      </p>
      <h1 className="text-2xl text-blue-500 font-bold mt-10">
        Q4:You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?{" "}
      </h1>
      <p>
        <b>Ans:</b> Let we have an array of some products. Each product has a
        name, price, description, etc.First I'll declare a function in which I
        will execute the search. I will use here <b>Array.find</b> method to
        loop through each element and check whether the element's name is
        similar to its name parameter
      </p>
      <br />
      <code>
        const findProductsByName = name => {"{"}
        <br />
        const matchedProduct = products.find(product=>product.name === name);
        <br />
        return matchedProduct;
        <br />
        {"}"}
      </code>
      <h1 className="text-2xl text-blue-500 font-bold mt-10">
        Q5:What is a unit test? Why should write unit tests?{" "}
      </h1>
      <p>
        <b>Ans:</b> Unit tests are automated tests which are written and run by
        software developers to ensure that a section of an application which is
        also known as the "unit" meets its design and behaves as it was
        intended. In procedural programming, a unit could be an entire module,
        but it is more commonly an individual function or procedure.The purpose
        is to validate that each unit of the software code performs as expected.
        Unit Testing is done during the development of an application by the
        developers. Unit Tests isolate a section of code and verify its
        correctness. A unit may be an individual function, method, procedure,
        module, or object.
        <br />
        Unit Testing is very important because iff proper unit testing is done
        in early development, then it saves time and money in the end.
      </p>
    </div>
  );
};

export default Blog;
