# Train-Scheduler

_Displays train information and allows user to add more trains through a form_

Utilizing firebase database, this app stores information that is input by the user on a form.  When the user submits the form it is "immediately" displayed in a table.  This table of train information continues to grow as more information is submitted.  

Using moment.js, the app calculates the time of the next train arrival for each train listed (based on the current time) & displays the minutes left until this arrival time.

*Incorporated:*
- database (firebase)
- for loop
- moment.js
- methods
  - jQuery .on("click") method for button
  - .val()
  - .trim()
  - .push()

