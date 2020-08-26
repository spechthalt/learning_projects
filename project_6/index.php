<!DOCTYPE html>
<html lang="en">

  <head>
    <title>Slideshow</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
  <div class="slideshow-container">

    <div class="slide active" style="background-image: url('assets/slide-background-1.jpg');">
      <div class="slide-inner-wrapper">  
          <div class="text">
            <h2>IMAGE TITLE</h2>
            <p>Image description</p>
          </div>
      </div>  
    </div>

    <div class="slide" style="background-image: url('assets/slide-background-2.jpg');">
      <div class="slide-inner-wrapper"> 
        <div class="text">
          <h2>IMAGE TITLE</h2>
          <p>Image description</p>
        </div>
      </div> 
    </div>

    <div class="slide" style="background-image: url('assets/slide-background-3.jpg');">
      <div class="slide-inner-wrapper"> 
        <div class="text">
          <h2>IMAGE TITLE</h2>
          <p>Image description</p>
        </div>
      </div>
    </div>

    <div class="dot-selector">
      <span class="dot active" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>

  </div>

    <script src="slideshow.js"></script>
  </body>
</html>
