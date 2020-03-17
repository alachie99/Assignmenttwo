const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const students = [
    {
        "name": "Christian Dain",
        "dob": "17/04/1999",
        "program": "BSC ICT",
        "level": "200",
        "image": "/images/a.png"
    },
    {
        "name": "Micheal Owusu",
        "dob": "10/12/2000",
        "program": "BSC CS",
        "level": "100",
        "image": "/images/b.png"
    },
    {
        "name": "Geovanni Darko",
        "dob": "10/08/1998",
        "program": "BSC MIS",
        "level": "400",
        "image": "/images/c.jpg"
    }
]


app.get('/', (req, res)=>{
    res.render("homepage", {
        students
    });
});


app.get('/student/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render("students", {
        student,
        title: 'Students'
    });
});

const Port= 3000
app.listen(Port, ()=>{
    console.log(`Server is listening on port ${Port}`);
});

