import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//When a web page is loaded, the browser creates a Document Object Model of the page.
//"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."
// .render() is a method in the ReactDOM library that we use to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. The second argument in .render() is the location of where on the screen the JSX expression appears.
ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render() only updates DOM elements that have changed.






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
