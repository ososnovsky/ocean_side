import { useState } from "react";
import { differenceInCalendarDays, format, addDays } from "date-fns";


export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');


  const price = 50;
  const emailRecipient = 'ocean.side.praia@outlook.com';

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  }

  // Function to handle "Check-in" date change
  const handleCheckInChange = (ev) => {
    const newCheckIn = ev.target.value;
    setCheckIn(newCheckIn);

    // Calculate the next day and set it as the "Check-out" date
    if (newCheckIn) {
      const nextDay = addDays(new Date(newCheckIn), 1);
      setCheckOut(format(nextDay, "yyyy-MM-dd"));
    }
  };

  const handleBookingRequest = () => {
    if (name) {
      // If email is provided, open the user's email app with prepopulated content
      const subject = `Booking Request for Ocean Side`;
      const message = `Check-in: ${checkIn}\nCheck-out: ${checkOut}\nNumber of guests: ${numberOfGuests}\nName: ${name}\nPhone: ${phone}`;
      const mailtoLink = `mailto:${emailRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
    } else {
      // If email is not provided
      alert("Your name is necessary");
    }
    setCheckIn('');
    setCheckOut('');
  };

  return (
    <div className="bg-white shadow p-3 rounded mt-5 mb-2">


      <div className="border rounded-2xl">
        <div className="row">
          <div className="col-md-4 text-2xl text-center mt-3">
            <h5>Price: €{price} per night</h5>
            <p>Available for both short and long stay. The price varies depending on type of stay and the season. Confirmation is upon request.</p>
          </div>
          <div className="col-md-4">
            <div className="py-2 px-4">
              <label>Check-in:</label>
              <input
                type="date"
                className="form-control"
                value={checkIn}
                // onChange={(ev) => setCheckIn(ev.target.value)}
                min={new Date().toISOString().split('T')[0]} // Set the minimum date to today
                onChange={handleCheckInChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="py-2 px-4">
              <label>Check-out:</label>
              <input
                type="date"
                className="form-control"
                value={checkOut}
                min={new Date().toISOString().split('T')[0]} // Set the minimum date to today
                onChange={(ev) => setCheckOut(ev.target.value)}
              />
            </div>
          </div>

        </div>

        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Number of guests:</label>
            <input
              type="number"
              className="form-control"
              value={numberOfGuests}
              onChange={(ev) => setNumberOfGuests(ev.target.value)}
            />
            <label>Your name:</label>
            <input type="text"
              className="form-control"
              value={name}
              onChange={ev => setName(ev.target.value)} />
            <label>Phone number:</label>
            <input type="tel"
              className="form-control"
              value={phone}
              onChange={ev => setPhone(ev.target.value)} />
            {/* <label>Your email:</label> */}
            {/* <input type="email"
              className="form-control"
              value={email}
              onChange={ev => setEmail(ev.target.value)} /> */}
            <button className="btn btn-primary mt-4" onClick={handleBookingRequest}>
              Request booking for
              {numberOfNights > 0 && (
                <span> €{numberOfNights * price}</span>
              )}
            </button>
          </div>
        )}
      </div>

    </div>
  );
}