import './Count.css';
import ControllerButton from './ControllerButton';

function Controller({focusedNumber, onChange}) {
  const sizeList = [-1, -10, -100, 100, 10, 1];
  return(
    <div id="controller_container">
      {/* <div className="bt-nav_box">
        <button onClick={() => onChange(-1)} className={`bt-nav ${focusedNumber === -1 ? "focused" : ""}`}>-1</button>
      </div>
      <div className="bt-nav_box">
        <button onClick={() => onChange(-10)} className={`bt-nav ${focusedNumber === -10 ? "focused" : ""}`}>-10</button>
      </div>
      <div className="bt-nav_box">
        <button onClick={() => onChange(-100)} className={`bt-nav ${focusedNumber === -100 ? "focused" : ""}`}>-100</button>
      </div>
      <div className="bt-nav_box">
        <button onClick={() => onChange(100)} className={`bt-nav ${focusedNumber === 100 ? "focused" : ""}`}>100</button>
      </div>
      <div className="bt-nav_box">
        <button onClick={() => onChange(10)} className={`bt-nav ${focusedNumber === 10 ? "focused" : ""}`}>10</button>
      </div>
      <div className="bt-nav_box">
        <button onClick={() => onChange(1)} className={`bt-nav ${focusedNumber === 1 ? "focused" : ""}`}>1</button>
      </div> */}

      <ControllerButton size={sizeList[0]} focusedNumber={focusedNumber} onChange={onChange} />
      <ControllerButton size={sizeList[1]} focusedNumber={focusedNumber} onChange={onChange} />
      <ControllerButton size={sizeList[2]} focusedNumber={focusedNumber} onChange={onChange} />
      <ControllerButton size={sizeList[3]} focusedNumber={focusedNumber} onChange={onChange} />
      <ControllerButton size={sizeList[4]} focusedNumber={focusedNumber} onChange={onChange} />
      <ControllerButton size={sizeList[5]} focusedNumber={focusedNumber} onChange={onChange} />
      
    </div>
  );
}

export default Controller;