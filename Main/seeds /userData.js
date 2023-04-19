const { User } = require('../models');

const userData = [{
    username: 'ElvisPresley',
    password: 'Graceland'

},
{
    username: 'KurtCobain',
    password: 'Nirvana'
},
{
    username: 'TaylorSwift',
    password: 'Style'
},
{
    username: 'FatboySlim',
    password: 'FunkSoulBrother'
},
{
    username: 'Madonna',
    password: 'Holiday'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;