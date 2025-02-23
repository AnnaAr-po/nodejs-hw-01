import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Список контактів порожній');
      return;
    }

    const removedContact = contacts.pop();
    await writeContacts(contacts);

    console.log(`Видалено останній контакт:`, removedContact);
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
