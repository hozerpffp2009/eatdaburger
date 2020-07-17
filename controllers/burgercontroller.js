const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
        // This route gets data from burgers table
router.get("/", (req, res) => {
    burger.all((data) => {
        const object = {
            burgers: data
        };
        console.log(object);
        res.render("index", object);
    });
});
        // This route post data to table 
router.post("/api/burgers", (req, res) => {
    burger.create([
        "name", "devour"
    ], [
        req.body.name, req.body.devour
    ], (result) => {
        res.json({id: result.insertId});
    });
});
    // This route puts data into handlebars
router.put("/api/burgers/:id", (req, res) => {
    const condition = 'id = ' + req.params.id;
    console.log("condition", condition);
    console.log(req.params.id);
    burger.update({
        devour: req.body.devour
    }, condition, (result) => {
        if (result.changedRows == 0) {
            console.log("returning 404");
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
        // This route deletes data
router.delete("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;