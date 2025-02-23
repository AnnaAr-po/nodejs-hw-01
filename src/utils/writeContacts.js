import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
  try {
    const data = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('Контакти успішно збережено!');
  } catch (error) {
    console.error('Помилка запису у файл:', error.message);
  }
};
