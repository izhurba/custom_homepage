function updateClock() {
    var now = new Date(), // current date
        months = ["January", "February", "March", "April", "May", "June", "July", 
                  "August", "September", "October", "November", "December" ]; // you get the idea
        minutes = now.getMinutes().toString();
        time = now.getHours() + ':' + ('0' + minutes).slice(-2), // again, you get the idea

        // a cleaner way than string concatenation
        date = [now.getDate(), 
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    // set the content of the element with the ID time to the formatted string
  document.getElementById('time').innerHTML = [date, time].join(' / ');
  document.title = time;
}
setInterval(updateClock, 1000);




