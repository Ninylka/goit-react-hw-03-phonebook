import { InputSearch, TitleInputSearch } from  '../FormContacts/FormContacts.styled'

 export const Filter =  ({value, onFind}) => { 

        return (
            <>
            <TitleInputSearch> Find contacts by name </TitleInputSearch>
            <InputSearch type="text" name="search" value={value} onChange={onFind} required />
            </>
        );
    }
 
