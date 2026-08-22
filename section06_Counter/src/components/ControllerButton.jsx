function ControllerButton({size, focusedNumber, onChange}) {
  return(
    <div className="bt-nav_box">
      <button onClick={() => onChange(size)} className={`bt-nav ${focusedNumber === size ? "focused" : ""}`}>{size}</button>
    </div>
  );
}

export default ControllerButton;