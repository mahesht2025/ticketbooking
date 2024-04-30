document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const movie = document.getElementById('movie').value;
    const seatsInput = document.getElementById('seats').value;
    const quantity = seatsInput.split(',').length;
    
    if (movie === "") {
      alert("Please select a valid movie!");
      return;
    }
    
    if (seatsInput.trim() === "" || quantity === 0) {
      alert("Please enter  valid seat numbers or specify quantity!");
      return;
    }
    
    if (quantity !== parseInt(document.getElementById('quantity').value)) {
      alert("Please enter a valid number of seats!");
      return;
    }
    
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML=`
      <p>Movie: ${movie}</p>
      <p>Quantity: ${quantity}</p>
      <p>Seats: ${seatsInput}</p>
      <p>Tickets successfully booked!</p>
    `;
    const confirmationWindow = window.open('');
confirmationWindow.document.open();
confirmationWindow.document.write(confirmationDiv.innerHTML);
confirmationWindow.document.close();
     });