// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;


// create table => nestedArray 
const elements = [[10], [20], [30, 40]];
console.log(elements[2][0]); // output 30 

// create table => nestedArray 
const numberClusters = [[1, 2], [3, 4], [5, 6]];
// variable target and using the const keyword => assign to acces the element 6. 
const target = numberClusters[2][1]; 

console.log(target); 