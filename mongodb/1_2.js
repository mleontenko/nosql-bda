// obrisi postojecu kolekciju
db.statistika_ctg.drop();

// array s kontinuiranim varijablama
var continous = ['b', 'e', 'LBE', 'LB', 'AC', 'FM', 'UC', 'ASTV', 'MSTV', 'ALTV', 'MLTV', 'DL', 'DS', 'DP', 'DR', 'Width', 'Min', 'Max', 'Nmax', 'Nzeros', 'Mode', 'Mean', 'Median', 'Variance'];

// za svaku kontinuiranu varijablu poziva funkciju izracun() i proslijedi joj naziv varijable
continous.forEach(e => izracun(e));

// Racuna avg, stdev i broj non missing elemenata ako varijabla nije jednaka -1 te unosi rezultat u kolekciju statistika_ctg
function izracun(atr) {
	var query1 = { "$match": { [atr]: {"$ne" : -1} } };
	var query2 = { "$group": { "_id": atr, "avg": { "$avg": "$"+[atr] }, "stdev": { "$stdDevPop": "$"+[atr] }, "nonMissing": { "$sum": 1 }}};
			
	result = db.ctg.aggregate([query1, query2]).next();
		
	db.statistika_ctg.insert(result);
}