const db = require('../db')
const { Order, Juice } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// When seed file executed, connectes to Mongo db and creates 4 juices in juices collection
const main = async () => {
  const juices = [
    {
      name: 'Orange Boost',
      description: 'Carrot, Pineaple, Orange, Ginger',
      image:
        'https://img.emedihealth.com/wp-content/uploads/2020/03/ginger-carrot-juice-feat-1.jpg',
      size: ['Small', 'Medium', 'Large'],
      sugarLevel: ['0%', '50%', '100%'],
      prices: [8, 10, 12],
      comments: 'Any special instructions please enter here'
    },
    {
      name: 'The Hulk',
      description: 'Kale, Apple, Celery, Cucumber',
      image:
        'https://www.cleaneatingkitchen.com/wp-content/uploads/2019/06/green-juice-on-table-with-vegetables.jpg',
      size: ['Small', 'Medium', 'Large'],
      sugarLevel: ['0%', '50%', '100%'],
      prices: [8, 10, 12],
      comments: 'Any special instructions please enter here'
    },
    {
      name: 'Liquid Gold',
      description: 'Lemon, Turmeric, Orange, Ginger',
      image:
        'https://i.pinimg.com/originals/bc/f6/08/bcf6081f4229b50759e41c25edf369a3.jpg',
      size: ['Small', 'Medium', 'Large'],
      sugarLevel: ['0%', '50%', '100%'],
      prices: [8, 10, 12],
      comments: 'Any special instructions please enter here'
    },
    {
      name: 'Detoxifier',
      description: 'Carrot, Apple, Spinach, Kale, Orange',
      image:
        'https://perchancetocook.com/wp-content/uploads/2018/04/Tropical-Kale-Carrot-Orange-Juice-perchancetocook-5-741x1024.jpg',
      size: ['Small', 'Medium', 'Large'],
      sugarLevel: ['0%', '50%', '100%'],
      prices: [8, 10, 12],
      comments: 'Any special instructions please enter here'
    }
  ]

  const preOrder = await new Order({
    name: 'Flavia Almendras',
    paymentMethod: 'Cash',
    pickupMethod: 'In-store',
    address: '123 Lolsob',
    totalAmount: 10,
    juices: [{ juice_Id: juices._id, quantity: 1 }],
    status: 'Ordering'
  })
  await preOrder.save()

  await Juice.insertMany(juices)
  console.log('PreOrder has been placed!') // will mostly likely not be needed in the end
  console.log('Fruits have been juiced!')
}

const run = async () => {
  db.dropDatabase()
  await main()
  db.close()
}

run()
