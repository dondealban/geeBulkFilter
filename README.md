# GEEBulkFilter

This project summarizes code in the Google Earth Engine API in order to bulk filter and export remote sensing data

1. `GEEBulkFilter.js` essentially imports a Landsat ImageCollection object and then conducts spatial and temporal filters. Next, it also clears clouds, cloud-shadows, water, snow and low illumination areas due to terrain-related shadows. Reprojection is also involved due to differing coordinate reference systems of datasets. Finally, an export function saves the filtered images onto Google Drive.

2. `projection_stringComparison.js` is experimental and is used to test the equivalence of techniques to retrieve projection data. 

3. `jupyterImplementation` is an experimental branch of this project. Here, we attempt to embed the GEE code into a Jupyter notebook. This might add increased automation potential, since we can control most data-related processes via Jupyter notebook instead of a browser.

<img src="https://user-images.githubusercontent.com/35427332/41541174-2428fc60-7312-11e8-98bb-9b05ffc24a9b.png" width="800">

## Guide for Ubuntu Linux OS to run `GEEBulkFilter.js`

1. To start this process, a Google account is necessary. Next, one needs to sign up for GEE. If this is not done as yet, navigate to the following site to sign up:

   https://earthengine.google.com/

2. After signing up for GEE, log into your account within GEE and navigate to the central code editor. Create a new repository and name it accordingly. 

3. Next, we need to upload certain assets required for our analysis. Within the GEE code editor, navigate to the `Assets` tab and select `NEW` and `Table upload`. Select all the files corresponding to the generic file path `vegMonitor/GEE_Inputs/DL_PL_KN_Dissolve_WGS84` with the endings `.cpg, .dbf, .prj, .sbn, .sbx, .shp, .shp.xml, .shx `. Let this asset be named `DL_PL_KN_Dissolve_WGS84`. Import this asset into the code editor with the variable name `table`.

4. Select all the files corresponding to the generic file path `vegMonitor/GEE_Inputs/DL_PL_KN_Dissolve_UTM43N` with the endings `.cpg, .dbf, .prj, .sbn, .sbx, .shp, .shp.xml, .shx `. Let this asset be named `DL_PL_KN_Dissolve_UTM43N`. Import this asset into the code editor with the variable name `table2`.

5. We now have the important variables imported. Now, copy and paste the code from the `GEEBulkFilter.js` file into the GEE code editor. With this, we are good to go. 

6. Run the script and the corresponding data will be sent to your Google Drive for downloading!
