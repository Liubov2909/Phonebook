import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import Loading from "../components/Loading/Loading";
import { selectLoading } from "../redux/contacts/selectors";

import { fetchContacts } from "../redux/contacts/operations";

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loading />}
      <ContactList />
    </div>
  );
}
