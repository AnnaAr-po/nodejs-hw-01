import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`Кількість контактів: ${contacts.length}`);
    return contacts.length;
  } catch (error) {
    console.error('Помилка:', error.message);
  }
};

countContacts();
