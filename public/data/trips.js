import cities from './cities.js'

export default [
  {
    from: cities.NANTES,
    to: cities.LISBON,
    dateStart: new Date('2018-10-04'),
    dateEnd: new Date('2018-10-31'),
  }, {
    from: cities.LISBON,
    to: cities.LYON,
    dateStart: new Date('2018-10-31'),
    dateEnd: new Date('2018-11-05'),
  }, {
    from: cities.LYON,
    to: cities.MADRID,
    dateStart: new Date('2018-10-05'),
    dateEnd: new Date('2018-11-11'),
  }, {
    from: cities.MADRID,
    to: cities.PALMA,
    dateStart: new Date('2018-10-11'),
    dateEnd: new Date('2018-11-25'),
  }, {
    from: cities.PALMA,
    to: cities.MADRID,
    dateStart: new Date('2018-11-25'),
    dateEnd: new Date('2018-12-04'),
  }, {
    from: cities.MADRID,
    to: cities.DUBLIN,
    dateStart: new Date('2018-12-04'),
    dateEnd: new Date('2018-12-11'),
  }, {
    from: cities.DUBLIN,
    to: cities.PARIS,
    dateStart: new Date('2018-12-11'),
    dateEnd: new Date('2018-12-16'),
  }, {
    from: cities.PARIS,
    to: cities.ANGERS,
    dateStart: new Date('2018-12-11'),
    dateEnd: new Date('2018-01-09'),
  }, {
    from: cities.ANGERS,
    to: cities.PARIS,
    dateStart: new Date('2018-12-11'),
    dateEnd: new Date('2018-01-09'),
  }, {
    from: cities.PARIS,
    to: cities.SINGAPORE,
    dateStart: new Date('2018-12-11'),
    dateEnd: new Date('2018-01-09'),
  }
]