import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(deleteContact(id));
  }
  return (
    <div className={css.container} id={id}>
      <ul className={css.text}>
        <li className={css.list}>
          <FaUser height={10} width={10} />
          {name}
        </li>
        <li className={css.list}>
          <FaPhone height={10} width={10} />
          {number}
        </li>
      </ul>
      <button className={css.btn} type="button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
