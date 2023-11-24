const express=require('express');
const http=require('http');
const connectDB=require('./db/db');


const dotenv=require('dotenv');
const app=express();
const apiRouter=require('./routes');
app.use(express.json());

app.use('/api',apiRouter);
const PORT=8000;
dotenv.config();
const server=http.createServer(app)
server.listen(PORT,()=>{
    console.log("Server is running successfully "+PORT);
});

const jwt = require('jsonwebtoken')
const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },

]

app.post('/log',(req, res)=>{
    const username=req.body.username;
    const user={name:username};

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken: accessToken});
})

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}


const start =async()=>{
     try{
        await connectDB(process.env.MONGO_URI);
    }   catch(error) {
        console.log(error);
    }
};
start();