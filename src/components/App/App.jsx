import { Suspense, useEffect } from "react";
// import ContactForm from "../ContactForm/ContactForm";
// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import Loading from "../Loading/Loading";
// import { selectError, selectLoading } from "../../redux/contactsSlice";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import ContactsPage from "../../pages/ContactsPage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.box}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
      </Suspense>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </Suspense>

      {/* // <ContactForm />
      // <SearchBox />
      // {loading && <Loading>Loading contacts...</Loading>}
      // {error && <ErrorMessage>Error fetching contacts!</ErrorMessage>}
      // <ContactList /> */}
    </div>
  );
}
