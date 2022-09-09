const { v4 } = require('uuid')

let contacts = [
  {
    id: v4(),
    name: 'Filipe',
    email: 'filipe@email.com',
    phone: '123123123',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'João',
    email: 'joao@email.com',
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

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id))
    })
  }

  deleteById(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id)

      resolve()
    })
  }
}

module.exports = new ContactsRepository()
