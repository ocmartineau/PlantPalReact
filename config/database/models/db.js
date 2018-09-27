//Initialize NPM packages
const Sequelize = require('sequelize');
const UserModel = require('../models/User');
const UserPlantModel = require('../models/UserPlant');
const SystemPlantModel = require('../models/SystemPlant');
const ScheduleDayModel = require('../models/ScheduleDay');

// const db = new Sequelize('plant_pal', 'root', 'calyps0', {
//     host: 'localhost',
//     dialect: 'mysql',
//     operatorsAliases: false,
//
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
// });


const User = UserModel(db, Sequelize);
const UserPlant = UserPlantModel(db, Sequelize);
const SystemPlant = SystemPlantModel(db, Sequelize);
const ScheduleDay = ScheduleDayModel(db, Sequelize);

ScheduleDay.belongsToMany(UserPlant, {through: 'userPlantSchedule'});
UserPlant.belongsToMany(ScheduleDay, {through: 'userPlantSchedule'});
UserPlant.belongsTo(User);

// db.sync({
//     force: true
//
// }).then(() => {
//     console.log("Database Created!")
// });
module.exports = {
    'User' : User,
    'UserPlant': UserPlant,
    "SystemPlant": SystemPlant,
    "ScheduleDay": ScheduleDay
};
