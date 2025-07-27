const fs = require('fs');
const path = './db.json';

let db;
try {
    db = JSON.parse(fs.readFileSync(path, 'utf-8'));
} catch (err) {
    db = {
        data: {
            chats: {},
            users: {}
        }
    };
    fs.writeFileSync(path, JSON.stringify(db, null, 2)); 
}

module.exports = db;