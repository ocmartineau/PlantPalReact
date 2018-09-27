module.exports = (db, type) => {
    return db.define('systemPlant', {
        name: {
            type: type.STRING,
        }
    })
};