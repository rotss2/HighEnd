import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1>Restaurant Reservation & Queue Management</h1>
      <p>Manage your reservations and queues efficiently</p>
      <Link to="/reservation" className="btn btn-primary m-2">Make a Reservation</Link>
      <Link to="/queue" className="btn btn-info m-2">Check Queue Status</Link>
    </div>
  );
}

export default Home;