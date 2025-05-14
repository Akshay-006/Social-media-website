const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');
const { where } = require('sequelize');
const {sign} = require("jsonwebtoken");

router.post("/", async (req,res) => {
    const {username,password} = req.body;
    bcrypt.hash(password,10).then((hash) => {
        Users.create({
            username : username,
            password : hash,
        });
        res.json("Success !!!");
    });
});

router.post("/login", async (req,res) => {
    const {username, password} = req.body;

    const user = await Users.findOne({where : {username : username}});
    if(!user) return res.json({error : "User does not Exist !"});
    else{
    bcrypt.compare(password,user.password).then((match) => {
        if (!match) return res.json({error : "Username and password are not in correct combination !"});
        const accessToken = sign({
            username : user.username, id : user.id}, 
            "akshaythew"
        )
        res.json(accessToken);
    })
    }
});

module.exports = router;
