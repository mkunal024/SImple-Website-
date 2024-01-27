const express=require("express");
const router=express.Router();
const connection=require('../database/dbconnect')

router.get("/cities",(req,resp)=>{
    connection.query("select * from city",(err,data)=>{
        if(err){
            resp.status(500).send("data not found"+json.stringify(err))
        }
        else{
            console.log("Data retrieved from database : ",data);
            resp.render('cities', { cities: data });
        }
    })
})

router.post("/filter-cities", (req, res) => {
    const selectedCountry = req.body.country; // Assuming you use body-parser for form parsing

    // Query the database based on the selected country
    connection.query("SELECT * FROM city WHERE CountryCode = ?", [selectedCountry], (err, data) => {
        if (err) {
            res.status(500).send("Error querying the database: " + JSON.stringify(err));
        } else {
            // Render the home page with the filtered cities data and selected country
            res.render('home', { citiesData: data, selectedCountry });
        }
    });
});



module.exports=router;