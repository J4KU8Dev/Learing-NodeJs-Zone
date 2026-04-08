const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProducstFromFile = cb => {
    
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            return cb([]);
        }else {
            cb(JSON.parse(fileContent));
        }
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProducstFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
       getProducstFromFile(cb);
    }
}