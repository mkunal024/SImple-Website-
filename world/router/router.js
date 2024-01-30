const express=require("express");
const router=express.Router();
const connection=require('../database/dbconnect')



router.get('/', (req, res) => {
    connection.query("SELECT distinct(Continent) FROM country;", (error, results) => {
        if (error) {
            res.status(500).send("Error querying the database: " + JSON.stringify(error));
        }
        //console.log("Data retrieved from database: ", results);
        //res.send(results);
        res.render('home', { data: results });

    });
});

router.get("/continent", (req, res) => {
    const selectedContinent = req.query.continent;
    console.log("Selected Continent:", selectedContinent);

    connection.query("SELECT * FROM country where continent=?;", [selectedContinent], (err, results) => {

       if (err) {
           res.status(500).send("Error querying the database: " + JSON.stringify(err));
       } else {
            //res.send(results);
            res.render('country', { data: results, selectedContinent });
       }
});
});

router.get("/continent/:countryCode", (req, res) => {
    const selectedCountry = req.params.countryCode;
    console.log("Selected Country:", selectedCountry);

    connection.query("SELECT * FROM city where CountryCode=?;", [selectedCountry], (err, results) => {

       if (err) {
           res.status(500).send("Error querying the database: " + JSON.stringify(err));
       } else {
            res.send(results);
            //res.render('country', { data: results, selectedCountry });
       }
});
});

module.exports=router;