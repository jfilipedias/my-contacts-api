const { v4 } = require('uuid')

const db = require('../../database')

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

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email))
    })
  }

  async create({ name, email, phone, category_id }) {
    const [row] = await db.query(
      `INSERT INTO contacts(name, email, phone, category_id) 
      VALUES($1, $2, $3, $4)
      RETURNING *`,
      [name, email, phone, category_id]
    )

    return row
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      }

      contacts = contacts.map((contact) => {
        if (contact.id === id) return updatedContact

        return contact
      })

      resolve(updatedContact)
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
