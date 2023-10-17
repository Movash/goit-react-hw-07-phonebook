import { Form } from "./styled";

const FormContact = ({ handleChange, handleSubmit, name, number }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          autoComplete="off"
          type="text"
          name="name"
          pattern="^[^\d]+$"
          placeholder="Albert Einstein"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </div>
      <div>
        <label>Numder</label>
        <input
          autoComplete="off"
          type="tel"
          name="number"
          pattern="^(\+?[0-9 \(\)\-\.х]+)$"
          placeholder="+38(097)862-31-45"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </div>
      <button type="submit">Add contact</button>
    </Form>
  );
};

export default FormContact;
