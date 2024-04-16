import { useState, useEffect } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  useEffect( () => {
    console.log('running effect');
    const intervalId = setInterval( () => {
      console.log('incrementing');
      setCount(count => count + 1 );

    }, 1000 );

    return () => {
      console.log('cleanup');
      clearInterval(intervalId);
    };

  }, []);

  return (
    <div className="counter">
      {count}
    </div>
  );
}

export default Counter;

