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
            //resp.send(data);
        }
    })
})

router.post("/filter-cities", (req, res) => {
    const selectedCountry = req.body.country; // Assuming you use body-parser for form parsing
            
    connection.query("SELECT distinct(CountryCode) FROM city;", (error, results) => {
    
    // Query the database based on the selected country
    connection.query("SELECT * FROM city WHERE CountryCode = ?", [selectedCountry], (err, data) => {
        if (err) {
            res.status(500).send("Error querying the database: " + JSON.stringify(err));
        } else {
            // Render the home page with the filtered cities data and selected country
            res.render('home', { data: results,citiesData: data, selectedCountry });
        }
    });
});
});

router.get('/', (req, res) => {
    connection.query("SELECT distinct(CountryCode) FROM city;", (error, results) => {
        if (error) {
            console.error("Error querying the database: ", error);
            throw error;
        }

        res.render('home', { data: results });
    });
});

module.exports=router;