import React, { useEffect, useState } from 'react';
import { onQueueUpdate } from '../services/SocketService';

function Queue() {
  const [queueStatus, setQueueStatus] = useState(null);

  useEffect(() => {
    onQueueUpdate((data) => {
      setQueueStatus(data);
    });
  }, []);

  return (
    <div>
      <h2>Your Queue Status</h2>
      {queueStatus ? (
        <div>
          <p>Your position in the queue: {queueStatus.position}</p>
          <p>Estimated wait time: {queueStatus.estimatedWaitTime} minutes</p>
        </div>
      ) : (
        <p>Joining the queue...</p>
      )}
    </div>
  );
}

export default Queue;