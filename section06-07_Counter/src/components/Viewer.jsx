import './Count.css';

function Viewer({ count, handleOnClick }) {
  return(
    <div id="count_content_container">
      <span onClick={handleOnClick}><strong id="count">{count}</strong></span>
    </div>
  );
}

export default Viewer;