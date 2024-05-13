app.post("/register",(req,res)=>{
    UserModel.create(req.body).then(student=>res.json(student)).catch(err=>res.json(err));
    
    });
    
    app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user)
        {
            if(user.password === password)
            {
                res.json("Success")
            }
            else
            {
                res.json("Password or UserEmail is Not Correct : Error")
            }
        }
        else
        {
            res.json("email is not exists")
        }
    }).catch(err=>console.log(err));
    });