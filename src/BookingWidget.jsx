import { useState } from "react";
import { Navigate } from "react-router-dom";
import { differenceInCalendarDays } from "date-fns";


export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState('');

  const price = 50;
  const emailRecipient = 'ocean.side.app@outlook.com';

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  }

  const handleBookingRequest = () => {
    if (email) {
      // If email is provided, open the user's email app with prepopulated content
      const subject = `Booking Request for Ocean Side`;
      const message = `Check-in: ${checkIn}\nCheck-out: ${checkOut}\nNumber of guests: ${numberOfGuests}\nName: ${name}\nPhone: ${phone}`;
      const mailtoLink = `mailto:${emailRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
      alert("Please send email from your email app now");
      setRedirect('/');
    } else {
      // If email is not provided
      alert("Email address is necessary");
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className="bg-white shadow p-3 rounded mt-5 mb-2">


      <div className="border rounded-2xl">
        <div className="row">
          <div className="col-md-4 text-2xl text-center mt-4">
            <h4>Price: €{price} / per night</h4>
          </div>
          <div className="col-md-4">
            <div className="py-2 px-4">
              <label>Check-in:</label>
              <input
                type="date"
                className="form-control"
                value={checkIn}
                onChange={(ev) => setCheckIn(ev.target.value)}
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
            <label>Your full name:</label>
            <input type="text"
              className="form-control"
              value={name}
              onChange={ev => setName(ev.target.value)} />
            <label>Phone number:</label>
            <input type="tel"
              className="form-control"
              value={phone}
              onChange={ev => setPhone(ev.target.value)} />
            <label>Your email:</label>
            <input type="email"
              className="form-control"
              value={email}
              onChange={ev => setEmail(ev.target.value)} />
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