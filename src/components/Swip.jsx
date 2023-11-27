import "./swip.css";
import { v4 as uuid } from "uuid";

export default function Swip() {
  const uniqueId = uuid();
  function handleSwipe() {
    // define the minimum distance to trigger the action
    const minDistance = 80;
    const container = document.querySelector(".swipe-container");
    // get the distance the user swiped
    const swipeDistance = container.scrollLeft - container.clientWidth;
    if (swipeDistance < minDistance * -1) {
    } else if (swipeDistance > minDistance) {
    } else {
      output.innerHTML = `did not swipe ${minDistance}px`;
    }
  }
  function handleSwip(e) {
    const minDistance = 80;
    const container = document.querySelectorAll(".swipe-container"); //.filter( ele => ele.getAttribute("uniqueid") == uniqueId);
    const first = [];
    container.forEach((ele) => {
      if (ele.getAttribute("uniqueid") == uniqueId) first.push(ele);
    });
    console.log(first[0]);
    // get the distance the user swiped
    const swipeDistance = first[0].scrollLeft - first[0].clientWidth;
    if (swipeDistance < minDistance * -1) {
      first[0].style.overflowX = "hidden";

          
    } else if (swipeDistance > minDistance) {
    }
  }
   function handleMove(e) {
    const minDistance = 80;
    const container = document.querySelectorAll(".swipe-container"); //.filter( ele => ele.getAttribute("uniqueid") == uniqueId);
    const first = [];
    container.forEach((ele) => {
      if (ele.getAttribute("uniqueid") == uniqueId) first.push(ele);
    });
    console.log(first[0]);
    // get the distance the user swiped
    const swipeDistance = first[0].scrollLeft - first[0].clientWidth;
    if (swipeDistance < minDistance * -1) {
      first[0].style.overflowX = "hidden";

          
    } else if (swipeDistance > minDistance) {
    }
  }
  function handleclick() {
    const container = document.querySelectorAll(".swipe-container"); //.filter( ele => ele.getAttribute("uniqueid") == uniqueId);
    const first = [];
    container.forEach((ele) => {
      if (ele.getAttribute("uniqueid") == uniqueId) first.push(ele);
    });

    // const container = document.querySelectorAll(".swipe-container");
    first[0].style.overflowX = "scroll";
    first[0].scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div
        uniqueid={uniqueId}
        className="swipe-container"
        onTouchEnd={handleMove}
        onTouchMove={handleSwip}
      >
        <div className="action left">
          <button onClick={handleclick} className="">
            action
          </button>
          <button onClick={handleclick} className="">
            action
          </button>
        </div>
        <div className="swipe-element">Swipe me to the left or right</div>
        <div className="action right">
          <i className="material-icons">done</i>
        </div>
      </div>
    </div>
  );
}
