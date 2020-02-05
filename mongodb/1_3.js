// obrisi postojecu kolekciju
db.frekvencija_ctg.drop();

// array s kategoričkim varijablama
var categoric = ['Date', 'Tendency', 'A', 'B', 'C', 'D', 'E', 'AD', 'DE', 'LD', 'FS', 'SUSP', 'CLASS', 'NSP'];

// za svaku kontinuiranu varijablu poziva funkciju izracun() i proslijedi joj naziv varijable
categoric.forEach(e => izracun(e));


function izracun(atr) {
	
	// 1. funkcija prvo izvlaci sva obiljezja kategorickih varijabli i kreira kolekciju koja sadrzi popis tih vrijednosti s pocetnom frekvencijom 0
	var vrijednosti = db.ctg.distinct(atr);
	
	initialValues = {};
	
	vrijednosti.forEach(key => {
		initialValues[key] = 0;
	});
	
	db.frekvencija_ctg.insertOne({ [atr]: initialValues });
	
	
	// 2. zatim prolazi kroz originalnu kolekciju i za svaku pronađenu vrijednost povecava joj vrijednost u novoj kolekciji za 1 te na taj nacin dobijemo frekvenciju pojavnosti po obiljezjima varijabli	
	db.ctg.find().forEach(e => {
		var currentval = e[atr];
		currentval = atr+"."+currentval;
		db.frekvencija_ctg.updateOne({ [currentval]: { $exists: true } }, { $inc: { [currentval]: 1 } });
	});
	
}