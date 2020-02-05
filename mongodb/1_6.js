// obrisi postojecu kolekciju
db.emb2_ctg.drop();

// ucitaj podatke iz frekvencija_ctg u varijablu
var continousVars = db.statistika_ctg.find().toArray();
​
// embeddanje u novi dokument
db.ctg.find().forEach(e => {
	db.emb2_ctg.insert({ ...e, statistika: continousVars });
});