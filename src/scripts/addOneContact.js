import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

async function addOneContact() {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...contacts, newContact];

    await writeContacts(updatedContacts);

    console.log(`Contact added:`, newContact);
  } catch (error) {
    console.error(error);
  }
}

addOneContact();
