const Item = require('../item');
const express = require('express');

const router = express.Router();

/**GET '/items' => return items array */
router.get('/items', (req, res, next) => {
    try {
        return res.json({ items: Item.findAll() });
    } catch (err) {
        return next(err)
    }
});

/**GET '/items/[name]' => return item by name */
router.get('/items/:name', (req, res, next) => {
    try {
       let item = Item.find(req.params.name);
       return res.json({ item: item });
    } catch (err) {
        return next(err)
    }
});

/** POST '/items' => given {name, price} => return new item  */
router.post('/items', (req, res, next) => {
    try{
        let item = new Item(req.body.name, req.body.price);
        return res.json({ added: item });
    } catch (err) {
        return next(err)
    }
});

/** PATCH '/items/[name]' =>  update item and return */
router.patch('/items/:name', (req, res, next) => {
    try {
       let item = Item.update(req.params.name, req.body);
       return res.json({ item: item});
    } catch (err) {
        return next(err)
    }
});

/** DELETE '/items/[name]' => delete item and return */
router.delete('/items/:name', (req, res, next) => {
    try {
       Item.remove(req.params.name);
       return res.json({ msg: 'Item deleted' });
    } catch (err) {
        return next(err)
    }
});

module.exports = router;