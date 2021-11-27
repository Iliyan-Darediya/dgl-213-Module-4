/* 
    Course:         DGL-213  
    Assignment:     Module 3.5
    Filename:       client.js
    Author:         Iliyan Darediya
    Date:           11 Nov 2021
*/
const requestInit = { 
    method: 'GET', mode: 'cors', cache: 'default'  // we're making a CORS request of our OWN proxy
 };
 let response = fetch("http://127.0.0.1:4000/", requestInit);