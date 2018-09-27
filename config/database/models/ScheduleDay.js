module.exports = (db, type) => {
    return db.define('scheduleDay', {
        name: {
            type: type.STRING,
        }
    })
};