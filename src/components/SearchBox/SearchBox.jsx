import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  function handleChange(e) {
    const word = e.target.value.trim();
    dispatch(changeFilter(word));
  }

  return (
    <div className={css.div}>
      <label className={css.label}>Find contacts by name or number</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search"
      />
    </div>
  );
}
