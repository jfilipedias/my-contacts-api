const contactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  async index(request, response) {
    const contacts = await contactsRepository.findAll()

    response.json(contacts)
  }

  async show(request, response) {
    const { id } = request.params

    const contact = await contactsRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ error: 'User not found.' })
    }

    response.json(contact)
  }

  async store(request, response) {
    const { name, email, phone, category_id } = request.body

    if (!name) {
      return response.status(400).json({ error: 'Name is required' })
    }

    const contactExists = await contactsRepository.findByEmail(email)

    if (contactExists) {
      return response
        .status(400)
        .json({ error: 'This e-mail is already in use.' })
    }

    const contact = await contactsRepository.create({
      name,
      email,
      phone,
      category_id,
    })

    response.status(200).json(contact)
  }

  async update(request, response) {
    const { id } = request.params
    const { name, email, phone, category_id } = request.body

    if (!name) {
      return response.status(400).json({ error: 'Name is required' })
    }

    const contactById = await contactsRepository.findById(id)

    if (!contactById) {
      return response.status(404).json({ error: 'User not found.' })
    }

    const contactByEmail = await contactsRepository.findByEmail(email)

    if (contactByEmail && contactByEmail.id !== id) {
      return response
        .status(400)
        .json({ error: 'This e-mail is already in use.' })
    }

    const contact = await contactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    })

    response.status(200).json(contact)
  }

  async delete(request, response) {
    const { id } = request.params

    const contact = await contactsRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ error: 'User not found.' })
    }

    await contactsRepository.deleteById(id)

    response.sendStatus(204)
  }
}

module.exports = new ContactController()
