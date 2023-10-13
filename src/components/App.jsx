import { Section } from './section/Section';
import { FormaContacts } from './formaContacts/FormaContacts';
import { Filter } from './filter/Filter';
import { Contacts } from './contacts/Contacts';

export const App = () => {
  return (
    <>
      <Section title={'Phonebook'}>
        <FormaContacts />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};
