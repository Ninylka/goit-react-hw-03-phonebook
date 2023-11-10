  
import { ButtonDelete, ItemContact } from '../FormContacts/FormContacts.styled'
export const ListContacts = ({ contacts , onDelete }) => {

  return (
    <ul>
      {contacts.map((contact) => (
        <ItemContact key={contact.id}>{contact.name} : {contact.number} <ButtonDelete type="button" onClick={() => onDelete(contact.id)}>Delete</ButtonDelete></ItemContact>
        
      ))}
      
    </ul>
  );
};
