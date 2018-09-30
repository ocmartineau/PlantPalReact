module.exports = (db, type) => {
    return db.define('user', {
        username: {
            type: type.STRING,
        },
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