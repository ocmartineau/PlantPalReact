module.exports = (db, type) => {
    return db.define('user', {
        email: {
            type: type.STRING,
            validate: {
            isEmail: true
            }
        },
        password: {
            type: type.STRING,
            allowNull: false
        },
    })
};