const db = require('../db')
const Juice = require('../models/juice')

// Connect to the database
db.on('error'.console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const juices = [
    {
      name: 'Orange Boost',
      description: 'Carrot, Pineaple, Orange, Ginger',
      img: 'https://img.emedihealth.com/wp-content/uploads/2020/03/ginger-carrot-juice-feat-1.jpg',
      size: 'Large',
      sugarLevel: [{ level: '0%' }, { level: '50%' }, { level: '100%' }],
      prices: [8, 10, 12],
      comments: 'Any special instructions please enter here'
    },
    {
      name: 'The Hulk',
      description: 'Kale, Apple, Celery, Cucumber',
      img: 'https://www.cleaneatingkitchen.com/wp-content/uploads/2019/06/green-juice-on-table-with-vegetables.jpg',
      size: 'Large',
      sugarLevel: [{ level: '0%' }, { level: '50%' }, { level: '100%' }],
      prices: [8, 10, 12],
      comments: 'Any special instructions please enter here'
    },
    {
      name: 'Liquid Gold',
      description: 'Lemon, Turmeric, Orange, Ginger',
      img: 'https://i.pinimg.com/originals/bc/f6/08/bcf6081f4229b50759e41c25edf369a3.jpg',
      size: 'Large',
      sugarLevel: [{ level: '0%' }, { level: '50%' }, { level: '100%' }],
      prices: [8, 10, 12],
      comments: 'Any special instructions please enter here'
    },
    {
      name: 'Detoxifier',
      description: 'Carrot, Apple, Spinach, Kale, Orange',
      img: 'https://perchancetocook.com/wp-content/uploads/2018/04/Tropical-Kale-Carrot-Orange-Juice-perchancetocook-5-741x1024.jpg',
      size: 'Large',
      sugarLevel: [{ level: '0%' }, { level: '50%' }, { level: '100%' }],
      prices: [8, 10, 12],
      comments: 'Any special instructions please enter here'
    }
  ]
  await Juice.insertMany(juices)
  console.log('Fruits have been juiced!')
}

const run = async () => {
  await main()
  db.close()
}
