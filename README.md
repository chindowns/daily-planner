# daily-planner

## Expected Functionality
### User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Design Functionality
### HTML file
#### Header Daily Planner
#### Planner uses a TABLE to display the planner for each day
##### The TABLE header displays the DATE VIEWED by default TODAY  (there is a floating next day and previous day to move days.)
##### The HOUR row displays the hour in the first column 08:00 - 17:00
##### After the first column - each row has 2 ROWS for each 1/2 hour block with 1 column displaying the 1/2 hour block and the 2nd column to hold the data.

If the date/time is in the past - the hours should be greyed out.  Need to utilize slightly different colors of grey to make reading each line easier.  The future dates/times should be colors but also with separate colors for each 1/2 hour.

### JavaScript
The JavaScript uses an object to record every days information.  The outermost object has the HOUR property.  The value of the HOUR property is another object with the 1/2 hour 00 & 30 has the properties.  The values of each will contain the information for the day.

JavaScript uses JSON to write the OBJECT DAY to localstorage so the information can be retained for later access.



