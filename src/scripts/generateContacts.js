import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (count) => {
  const contacts = await readContacts();
  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }
  await writeContacts(contacts);
  console.log(`Згенеровано ${count} контактів.`);
};

generateContacts(5);
