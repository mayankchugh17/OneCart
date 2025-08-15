import Slider1 from "../assets/slider1.jpg";
import Slider2 from "../assets/slider2.jpg";
import Slider3 from "../assets/slider3.jpg";
import Slider4 from "../assets/slider4.jpg";

function Background({ heroCount }) {
  if (heroCount === 0) {
    return (
      <img
        src={Slider1}
        alt="Slider 1"
        className="w-[50%] h-[100%] float-right overflow-auto object-cover"
      />
    );
  } else if (heroCount === 1) {
    return (
      <img
        src={Slider2}
        alt="Slider 2"
        className="w-[50%] h-[100%] float-right overflow-auto object-cover"
      />
    );
  } else if (heroCount === 2) {
    return (
      <img
        src={Slider3}
        alt="Slider 3"
        className="w-[50%] h-[100%] float-right overflow-auto object-cover"
      />
    );
  } else if (heroCount === 3) {
    return (
      <img
        src={Slider4}
        alt="Slider 4"
        className="w-[50%] h-[100%] float-right overflow-auto object-cover"
      />
    );
  }
}

export default Background;
