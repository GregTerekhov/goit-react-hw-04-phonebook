import PropTypes from 'prop-types';
import { SearchButton } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      {name}: {number}
      <SearchButton type="button" onClick={() => onDeleteContact(id)}>
        Delete contact
      </SearchButton>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
