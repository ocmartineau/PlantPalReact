module.exports = (db, type) => {
    return db.define('userPlant', {
        name: {
            type: type.STRING,
        }
    })
};