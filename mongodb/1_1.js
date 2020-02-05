// U datasetu nemam vrijednosti koje nedostaju

// Primjer upita koji vraca zapise za koje nedostaje vrijednost varijable NSP
db.ctg.find( { NSP: null } );
