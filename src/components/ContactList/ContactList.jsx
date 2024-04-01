import { useSelector } from "react-redux";
import Contacts from "../Contacts/Contacts";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const allContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {allContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contacts contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
