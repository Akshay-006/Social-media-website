const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models')

const postRouter = require('./routes/Posts');
const commentRouter = require('./routes/Comments');
const UserRouter = require('./routes/Users');

app.use("/post",postRouter);
app.use("/comment",commentRouter);
app.use("/auth",UserRouter);


db.sequelize.sync().then(() =>{
    app.listen(3001, () => {
    console.log("Server running on port 3001");
    });  
});




