import PropTypes from 'prop-types';
import { ContactItem, Button } from './Contact.styled';

const Contact = ({ id, name, number, onClick }) => {
  return (
    <ContactItem key={id}>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onClick(id)}>
        Delete
      </Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contact;
