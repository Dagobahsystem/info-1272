const currentDate = new Date(); // Get today's day

const day = currentDate.getDay(); // Get day of week Sun - Sat, 0 - 6

const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] // Array of days of the week

const todayDay = (dayOfWeek[day]); // Takes the Array and places the dayOfWeek value    

if ( day === 2 || day === 4) {
    alert("It's " + todayDay + ". Get to Class!");
} 
else {
    alert("It's " + todayDay + ". Go to bed.")
}

console.log(currentDate);
console.log(day);
console.log(todayDay);