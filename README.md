1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   - getElementById = Selects an element based on its unique id attribute.
   - getElementsByClassName = Selects elements based on their class attribute. Multiple elements can share the same class name.
   - querySelector = Selects a single element from the DOM.
   - querySelectorAll = Selects all elements in the DOM that match the specified CSS selector.

2. How do you create and insert a new element into the DOM?
   - To Create a new element we need to write = document.createElement('p');
   - To keep it in a variable = const element = document.createElement('p');
   - To insert into the DOM = appendChild(element);
  
3. What is Event Bubbling and how does it work?
   - Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements.
  
4. What is Event Delegation in JavaScript? Why is it useful?
   - Event delegation in JavaScript is a technique for handling events on multiple child elements by attaching a single event listener to their common parent element.
  
5. What is the difference between preventDefault() and stopPropagation() methods?
   - The preventDefault() method prevents the browser's default action associated with a specific event from occurring. This means it stops the browser from executing its built-in behavior for that event.
   - The stopPropagation() method prevents the event from propagating further up or down the DOM tree during the event capturing and bubbling phases. This means it stops the event from reaching parent or child elements that might also have event listeners for the same event type.
