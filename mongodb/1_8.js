// Slozeni index na poljima Date i CLASS
db.ctg.createIndex( { "Date": 1, "CLASS": 1 } );

//Sad u kolekciji ctg imamo osim _id indeksa (primarni kljuc) jos jedan slozeni index na poljima Date i CLASS sto ubrzava pretrazivanje po tim poljima
//naredba ispod izlistava indekse
db.ctg.getIndexes();

// Primjer upita koji trazi sve zapise za datum 35188 s vrijednosti CLASS polja 2
db.ctg.find( { Date: 35188, CLASS: 2 } );