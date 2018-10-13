// const fs=require('fs');//using file system(fs) : common module

// const os=require('os'); // operating system of our system details we get out of it

// const ld=require('lodash');
// const mymodule=require('./mymodule.js');


// var c1=process.argv[2];    ///using process argv
// //console.log(c1)
// var c2=process.argv[3]
// // console.log(command);
// c1=parseInt(c1);
// c2=parseInt(c2);
// var largest=mymodule.getLargest(c1,c2)
// console.log(largest);

//console.log(ld.isString(true));

//console.log(ld.uniq(['Gopal',12,'GOpal',100,100,12,1.2,4,5,6,122,100,100,12,34,35]));  //lodash

//const mymodule=require('./mymodule.js');


 //var name = mymodule.name;  // name gets Gopal through export of module

  //var getname =mymodule.getName();

//   var largest=mymodule.getLargest(10,13)
//  console.log(`Largest Number = ${largest}`);


// var UserInfo=os.userInfo(); //userInfo in built function
// var Username=UserInfo.username;
//console.log(UserInfo.username);

// fs.appendFile('sample.txt','welcome'+ Username, function(err){   //here we use callback function to display error
//     if(err) throw err;
//     console.log("data saved to file successfully")
// });


// fs.appendFile('sample.txt',`Welcome ${Username}`, function(err){   //here we use callback function to display error
//     if(err) throw err;
//     console.log("data saved to file successfully")           //template string method ($)
// });



// console.log('starting');
// setTimeout(
    
//     ()=>{
//       console.log('First Process.......')      // non-blocking I/O example
//     }
// ,5000);

// setTimeout(
//     ()=>{
//       console.log('second process......')      // non-blocking I/O example
//     }
// ,0);


// console.log('stopping');


//another example of call back

// console.log('starting');

// var getUserDetails=(id,callback)=>{    // executes in this way  : starting,object and stopping
//     var user={id:1,name:'Sumesh'};
//     callback(user);
// }

// getUserDetails(1,
// (userObject)=>{
//     console.log(userObject)
// }
// )

// console.log('stopping');
//...................
//EXPRESS JS      //expressjs.org
//....................


//app.use(express.static(__dirname + '/myhtmlpages'));    // toget the full path of the directory. it is called middleware

// app.get('/',(req,res)=>{
//    res.send('<h1>Welcome to express js programming</h1>')     //html response
// });



// app.get('/Home',(req,res)=>{
//     res.send('welcome to home page');
// });
// app.get('/About',(req,res)=>{
//     res.send('welcome to about page');
// });

// app.get('/',(req,res)=>{
//     res.send({"id":2,"name":"gopal"});                   //json response
// });


// app.get('/',(req,res)=>{
//     res.send('');                   //json response
// });

// const express=require('express');

// var app=express();
// const hbs=require('hbs');
// app.set('view engine','hbs');

// app.get('/',(req,res)=>{
//         res.render('views.hbs',{
//             pageTitle: "College",                          //loading dynamic content or passing values instead of using the html
//             pageBody:"Welcome to college",
//             year: new Date().getFullYear()
//         }) ;                                                 //rendering html page handlebars
//     });

// app.listen(3000);




//...................
//express to mongodb
//..............................



//FOR API
const express=require('express');
var mongoose=require('./mongoose_db');
var {users}=require('./usermodel');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.json());
//routing
app.post('/userentry',(req,res)=>{

   // console.log(req.body);
     //passing a value to the model

var Users=new users(
    {
        name:req.body.name,age:req.body.age
    }
   );

   Users.save().then((data)=>{
    console.log('Successfully saved',data)      // mongo gives a response after writing into it
    },
    (error)=>{
    console.log('Error',error);
});

})



//to write into db


app.listen(3000,()=>{
    console.log('Started')
})