App.Location.FIXTURES = [
  {
    id: 100,
    place: 'The Forge (Columbus)',
    address: '580 North 4th Street, Columbus, OH 43215',
    meetups: [200, 201]
  },
  {
    id: 101,
    place: 'TechColumbus',
    address: '1275 Kinnear Rd, Columbus, OH 43212',
    meetups: [202, 203, 204]
  }
];

App.Meetup.FIXTURES = [
  {
    id: 200,
    when: '2013-12-18',
    group: 'Columbus Javascript Group',
    topic: 'Writing richer mainframe apps with COBOLScript',
    location: 100
  },
  {
    id: 201,
    when: '2014-01-04',
    group: 'Columbus Knitting Group',
    topic: 'Multi-dimension quilting with Inception Stitch',
    location: 100
  },
  {
    id: 202,
    when: '2013-12-20',
    group: 'Columbus Fight Group',
    topic: 'First Aid',
    location: 101
  },
  {
    id: 203,
    when: '2014-01-10',
    group: 'Columbus Adventure Group',
    topic: 'Crocodile Bungee for Nutters',
    location: 101
  },
  {
    id: 204,
    when: '2014-01-13',
    group: 'Columbus Juggling Group',
    topic: 'Kittens and Chainsaws Month',
    location: 101
  },
];

