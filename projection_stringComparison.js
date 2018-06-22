// This code is used to test the equivalence of two methods which retrieve projection data

var collection = ee.ImageCollection('LANDSAT/LC8_SR')
.filter(ee.Filter.eq('WRS_PATH', 147))
.filter(ee.Filter.eq('WRS_ROW', 38))
.filterDate('2011-01-01', '2017-05-01')
.filter(ee.Filter.lte('CLOUD_COVER', 10))
.map(function(image) {
return image.clipToCollection(table2);
})
.map(function(image){
var clear = image.select('cfmask').eq(0);
clear = clear.updateMask(clear);
return image.updateMask(clear);
});

var trl = ee.List([[]]);
var trl2 = ee.List([[]]);

// First method, the more appropriate but limited version

function transformList(col) {
    var nimg = 31;
    var colList = col.toList(nimg);
    
    for (var i = 0; i < nimg; i++) {
      var img = ee.Image(colList.get(i));
      var tr = img.projection().getInfo().transform;
      trl = trl.add(tr);
    }
    print(trl);
  }
  
// Second method, string-ly improvised

function transformList2(col){
   var nimg = 31;
   var colList = col.toList(nimg);

    for (var i = 0; i < nimg; i++) {
    var img = ee.Image(colList.get(i));
    var float = img.projection().transform().split(', ');
    var noList = ee.List([]);
    var noList2 = ee.List([]);
    
    for(var j = 6; j <= 12; j += 2){
    var no = ee.Number.parse(ee.String(float.get(j)).replace(']', '').replace(']', '')).toFloat();
    noList = noList.add(no);
       }
    trl2 = trl2.add(noList.insert(1, 0).insert(3, 0));
    }
    print(trl2);
}

transformList(collection);
transformList2(collection);

// They seem to be equal, nice...

print(trl.equals(trl2));
