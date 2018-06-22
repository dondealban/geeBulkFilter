# GEEBulkFilter

This project summarizes code in the Google Earth Engine API in order to bulk filter and export remote sensing data

1.`GEEBulkFilter.js` essentially imports a Landsat ImageCollection object and then conducts spatial and temporal filters. Next, it also clears clouds, cloud-shadows, water, snow and low illumination areas due to terrain-related shadows. Reprojection is also involved due to differing coordinate reference systems of datasets. Finally, an export function saves the filtered images onto Google Drive.

2.`projection_stringComparison.js` is experimental and is used to test the equivalence of techniques to retrieve projection data. 

<img src="https://user-images.githubusercontent.com/35427332/41541174-2428fc60-7312-11e8-98bb-9b05ffc24a9b.png" width="800">
