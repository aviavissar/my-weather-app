import { useDispatch } from "react-redux";
import { addToFavorits, setFavorits } from "../actions/action";

let favorits_citys = [];

const useFavorits = () => {
  const dispatch = useDispatch();

  const getFavorits = () => {
    if (!JSON.parse(localStorage.getItem("favorits_citys"))) {
      localStorage.setItem("favorits_citys", JSON.stringify([]));
      return [];
    } else {
      return JSON.parse(localStorage.getItem("favorits_citys"));
    }
  };

  const toAddToFavorits = (cityObj) => {
    favorits_citys = getFavorits();
    if (cityObj) {
      favorits_citys.push(cityObj);
    }

    localStorage.setItem("favorits_citys", JSON.stringify(favorits_citys));
    dispatch(addToFavorits(favorits_citys));

    return favorits_citys;
  };

  const removeFavorits = (key) => {
    favorits_citys = JSON.parse(localStorage.getItem("favorits_citys"));
    favorits_citys = favorits_citys.filter(({ Key }) => key !== Key);
    localStorage.setItem("favorits_citys", JSON.stringify(favorits_citys));
    dispatch(setFavorits(favorits_citys));
  };

  return { toAddToFavorits, getFavorits, removeFavorits };
};

export default useFavorits;
