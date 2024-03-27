import React from "react";
import styles from "../../styles/BlogPost.module.css";
import { useRouter } from "next/router";
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <main className={styles.main}>
        <h1>{slug}</h1>
        <h2>Title Of the Page </h2>
        <div className={styles.container}>
          JavaScript is often heralded as the language of the web, but for many
          newcomers, it can feel like diving into the deep end without knowing
          how to swim. In this beginner's guide, we'll unravel the mysteries of
          JavaScript, starting from the ground up. Understanding JavaScript:
          First things first, what exactly is JavaScript? Unlike HTML and CSS,
          which dictate the structure and style of a webpage, JavaScript is a
          programming language that adds interactivity and dynamic behavior to
          websites. It's what makes elements on a page move, change, and respond
          to user actions. Variables and Data Types: At the heart of JavaScript
          are variables, containers for storing data. Variables can hold various
          types of data, such as numbers, strings (text), booleans (true/false),
          arrays (lists of values), and objects (collections of key-value
          pairs). Understanding how to declare and manipulate variables is
          fundamental to writing JavaScript code. Functions and Control Flow:
          Functions are blocks of reusable code that perform a specific task.
          They allow you to break down your code into smaller, more manageable
          chunks. Control flow structures like if statements and loops enable
          you to control the flow of your code based on conditions and iterate
          over data. DOM Manipulation: The Document Object Model (DOM) is a
          representation of the structure of an HTML document. JavaScript allows
          you to manipulate the DOM dynamically, which means you can add,
          remove, or modify elements on a webpage in response to user actions or
          other events. Event Handling: Event handling is what allows JavaScript
          to respond to user interactions like clicks, keystrokes, and mouse
          movements. By attaching event listeners to elements on a webpage, you
          can execute JavaScript code when those events occur, making your
          webpages interactive and engaging. Conclusion: JavaScript may seem
          daunting at first, but with a solid understanding of the basics,
          you'll soon find yourself creating dynamic and interactive web
          experiences. Remember to practice regularly, experiment with different
          techniques, and don't be afraid to ask for help when you need it.
          Happy coding!
        </div>
      </main>
    </div>
  );
};

export default Slug;
