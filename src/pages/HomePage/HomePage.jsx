import css from "../HomePage/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <h1 className={css.title}>Phonebook</h1>
        <h2 className={css.text}>Welcome page!</h2>
        <h2 className={css.text}>A handy app for you!</h2>
      </div>
    </div>
  );
}
