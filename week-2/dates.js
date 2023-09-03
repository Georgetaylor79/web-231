/*
============================================
; Title:  dates.js
; Author: George Taylor
; Date:   20 August 2023
; Description: Demonstrates the usage of dates in Node.js
;===========================================
*/

// variables
let date = new Date()
let now = date.toLocaleDateString()
let nowV2 = date.toLocaleDateString('en-US')

// output
console.log(' -- DATE WITH DASHES --')
console.log(now)

console.log('') // new line

console.log(' -- DATE WITH SLASHES --')
console.log(nowV2)
