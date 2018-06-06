 Author: Sujata Niroula
 Heroku Link: https://limitless-hamlet-75534.herokuapp.com/
 Git repository: https://github.com/Tasuja/vayuquotes

This application randomly reads a line from a csv file and returns a json, html, xml response as quote.json, quote.html, quote.xml respectively using Node.js and express module.  
readline-specific module has been used to read a specific line from csv file. 
xml module was used to generate an xml document.

Because of the complexity of the csv file, that is to say inconsistency of data, the data displayed in the response may include some inconsistencies. 
