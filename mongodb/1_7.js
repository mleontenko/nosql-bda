// Popis kontinuiranih varijabli
var continous = ['b', 'e', 'LBE', 'LB', 'AC', 'FM', 'UC', 'ASTV', 'MSTV', 'ALTV', 'MLTV', 'DL', 'DS', 'DP', 'DR', 'Width', 'Min', 'Max', 'Nmax', 'Nzeros', 'Mode', 'Mean', 'Median', 'Variance'];

// ucitavanje podataka iz 
var result = db.statistika_ctg.find().toArray();

// lista varijabli kojim je je standardna devijacija 10% > srednje vrijednosti (popunjava se naknadno)
var updatelist = [];

// popunjavanje liste iznad
result.forEach(e => {
	var identifier = e._id;
	var avg = e.avg;
	var stdev = e.stdev;
	
	var perc = 100 / avg;
	if(((stdev-avg) * perc) > 10) {
		updatelist.push(identifier);
	}
});

// Primjer update-anja kolekcije $set modifikatorom. Koristim statistika_ctg kolekciju jer emb2_ctg sadrzi identicne vrijednosti embedane za svaki zapis. 
db.emb2_ctg.update(
	   {},
	   { $set:
		  {
			"statistika[4].stdev" : "10% >"
		  }
	   }
	)