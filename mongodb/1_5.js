// obrisi postojecu kolekciju
db.emb_ctg.drop();
​
// ucitaj podatke iz frekvencija_ctg u varijablu
var categoricalVars = db.frekvencija_ctg.find().toArray();
​
// embeddanje u novi dokument
db.ctg.find().forEach(function(e){
    var obj = {...e};
    obj.frekvencija = categoricalVars;
    db.emb_ctg.insert(obj);
});