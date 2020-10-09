import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { intializeCountdown, resetCountdown } from "../redux/actions";
import { Store } from "../redux/reducer";

const Clock: React.FC<any> = ({
  intializeCountdown,
  resetCountdown,
  countdown,
}) => {
  const [tick, setTick] = useState(false);

  const handleReset = () => {
    resetCountdown();
    setTick(false);
  };

  useEffect(() => {
    if (tick && countdown > 0) {
      setInterval(() => intializeCountdown(countdown - 1), 1000);
    }
  }, [tick, countdown]);

  return (
    <div>
      <h1>{countdown}</h1>
      <button onClick={() => handleReset()}> Reset</button>
      <button onClick={() => setTick(true)}>Initialize Countdonw</button>
    </div>
  );
};

const mapStateToProps = (state: Store) => {
  const { countdown } = state;
  return { countdown };
};
export default connect(mapStateToProps, { intializeCountdown, resetCountdown })(
  Clock
);
