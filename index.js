function bookTicket() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;
    let seats = document.getElementById("seats").value;

    if (from === "" || to === "" || date === "" || seats === "") {
        alert("Please fill all details");
    } else {
        document.getElementById("result").innerHTML =
            "✔ Ticket Booking Successful <br>" +
            "From: " + from + "<br>" +
            "To: " + to + "<br>" +
            "Date: " + date + "<br>" +
            "Seats: " + seats;
    }
}
function login() {
    alert("Login Successful ✅");
}