
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormPhonebook,ButtonPhonebook,LabelPhonebook,InputPhonebookName,InputPhonebookNumber } from './FormContacts.styled';
export class FormContacts extends Component {
    state = {
      name: '',
      number: '',
    };
  

    handleChange = (evt) => {
      if (evt.target.name === 'number') {
        const number = evt.target.value.replace(/[^\d-]/g, '');
        this.setState({ [evt.target.name]: number });
      } else {
        this.setState({ [evt.target.name]: evt.target.value });
      }
    };

    
    handleSubmit = (evt) => {
      evt.preventDefault();
      const { name, number } = this.state;
      const contact = {
        name,
        number,
id: nanoid()
      };
      this.props.onSubmit(contact);
      this.setState({
        name: '',
        number: '',
      });
    };


    render() {
      const { name, number } = this.state;
      return (
        
          <FormPhonebook onSubmit={this.handleSubmit}>
            <LabelPhonebook>
              Name
              <InputPhonebookName
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
              />
            </LabelPhonebook>
            <LabelPhonebook>
              Number
              <InputPhonebookNumber
                type="tel"
                name="number"
                value={number}
                onChange={this.handleChange}
                required
              />
            </LabelPhonebook>
            <ButtonPhonebook type="submit">Add contact</ButtonPhonebook>
          </FormPhonebook>
      
      );
    }
  }

