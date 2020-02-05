// Odabrao sam varijablu b koja predstavlja početnu instancu (start instant)

// Statistika 1 - svi elementi <= srednje vrijednosti

db.statistika1_ctg.drop();

var result1 = db.ctg.find( { b: { $lte: 878.4397930385701 } } );

db.statistika1_ctg.insert(
	result1.toArray()
);



// Statistika 2 - svi elementi > srednje vrijednosti

db.statistika2_ctg.drop();

var result2 = db.ctg.find( { b: { $gt: 878.4397930385701 } } );

db.statistika2_ctg.insert(
	result2.toArray()
);