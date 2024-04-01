import css from "./Contacts.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { toast } from "react-hot-toast";

Modal.setAppElement("#root");

export default function Contact({ contact: { name, number, id } }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .then(() => {
        toast.success("Contact deleted successfully");
      })
      .catch((error) => {
        toast.error("Failed to delete contact");
        console.error("Error deleting contact:", error);
      });
    setModalIsOpen(false);
  };

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
      <button
        className={css.btn}
        type="button"
        onClick={() => setModalIsOpen(true)}
      >
        Delete
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            width: "380px",
            height: "160px",
            margin: "auto",
            textAlign: "center",
            backgroundColor: "#E6E6FA",
          },
        }}
      >
        <h2 className={css.text}>Confirm Delete</h2>
        <p className={css.paragr}>
          Are you sure you want to delete this contact?
        </p>
        <div className={css.modalBtn}>
          <button className={css.yesBtn} onClick={handleDelete}>
            Yes
          </button>
          <button className={css.noBtn} onClick={() => setModalIsOpen(false)}>
            No
          </button>
        </div>
      </Modal>
    </div>
  );
}
