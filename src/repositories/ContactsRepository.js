const { v4 } = require('uuid')

const contacts = [
  {
    id: v4(),
    name: 'Filipe',
    email: 'filipe@email.com',
    phone: '123123123',
    category_id: v4(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts)
    })
  }
}

module.exports = new ContactsRepository()
