# Vanilla Javascript New Year Countdown

### WHAT I USE
- setInterval to run coundown on it own
- new Date() built in function to get current date
- new Date() always return object data type
- Math.floor()
- Division operator
- Modulo operator

### LOGIC

- we get current date
- we set new year string date and change it into official date properties.
- minus new year date - cureent date (get milliseconds)
- Divided by 1000 makes into total seconds
- total seconds % 60 will get current sec 
- Total seconds / 60 will get total mins
- total seconds / 60 % 60 will get current mins
- total seconds / 60 / 60 % 60 will get current hrs
- total seconds / 60 / 60 / 24 will get totals days

### IMAGE
- ![alt text](./img/newyear.jpg)

