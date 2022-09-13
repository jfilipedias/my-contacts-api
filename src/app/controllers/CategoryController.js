const categoriesRepository = require('../repositories/CategoriesRepository')

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query

    const categories = await categoriesRepository.findAll(orderBy)

    response.json(categories)
  }

  async show(request, response) {
    const { id } = request.params

    const category = await categoriesRepository.findById(id)

    if (!category) {
      return response.status(404).json({ error: 'Category not found.' })
    }

    response.json(category)
  }

  async store(request, response) {
    const { name } = request.body

    if (!name) {
      return response.status(400).json({ error: 'Name is required' })
    }

    const categoryById = await categoriesRepository.findByName(name)

    if (categoryById) {
      return response
        .status(400)
        .json({ error: 'This name is already in use.' })
    }

    const category = await categoriesRepository.create(name)

    response.json(category)
  }

  async update(request, response) {
    const { id } = request.params
    const { name } = request.body

    if (!name) {
      return response.status(400).json({ error: 'Name is required' })
    }

    const categoryById = await categoriesRepository.findById(id)

    if (!categoryById) {
      return response.status(404).json({ error: 'Category not found.' })
    }

    const category = await categoriesRepository.update(id, name)

    response.json(category)
  }

  async delete(request, response) {
    const { id } = request.params

    const category = await categoriesRepository.findById(id)

    if (!category) {
      return response.status(404).json({ error: 'Category not found.' })
    }

    await categoriesRepository.delete(id)

    response.sendStatus(204)
  }
}

module.exports = new CategoryController()
