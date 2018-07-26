/cliReviewing GEE Output Data
=========================

Now we will navigate to the data exported by our GEE Script. We now have 31 Landsat 8 SR Images. These images have been clipped to a certain general boundary. We would like to reduce this boundary to all altitudes below 3,000 m a.m.s.l. Furthermore, we would also like to replace all 0 values in the images produced with `NA` values.

First, we need to load/install some necessary packages.

``` r
if (!require("raster")) install.packages("raster")
library("raster")

if (!require("rgdal")) install.packages("rgdal")
library("rgdal")
```

Now we have loaded necessary packages. Let's move on to the actual process of cleaning the images.

``` r
rlist<-list.files(paste(getwd(),"/gee_output", sep =""), pattern="tif$", full.names = TRUE) 
s <- lapply(rlist, stack)
polygonLower <- readOGR(paste(getwd(), "/gee_input", sep=''), "DL_PL_KN_Lower_UTM43N")

for(i in 1:length(s)){
  image <- s[[i]]
  image[image[] == 0] <- NA
  imageMasked <- mask(image, polygonLower)
  writeRaster(imageMasked, file.path(paste(getwd(), "/climg", sep = ''), 
                                     names(s[[i]])[1]), format = "GTiff")
}
```

Manual Check and Refinements
============================

After doing this, our images are saved in the `/climg` directory. Now we can visualize these images to manually check for any possible issues. The following 5 images were ascertained to be defective and not suitable for further analysis. This is due to the presence of objects such as haze, and possibly inaccurate atmospheric correction. Their corresponding file names were: `LC81470382014047_6.tif`, `LC81470382014111_7.tif`, `LC81470382015258_19.tif`, `LC81470382017023_28.tif`, `LC81470382017055_29.tif`. These files were then removed from the `/climg` directory. 

![](/img/Defective_Images.png)

Summary
=======

We have now reviewed and refined the resulting remote sensing data. The resulting 26 images in the `/climg` directory represent the final images which are now ready for post-processing.
