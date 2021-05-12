---
layout: home
noindex: true
---

<button id="upload_widget" class="cloudinary-button">Upload files</button>

<script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>  

<script type="text/javascript">  
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'caplan', 
  uploadPreset: 'emea-on-rails-2021-featured-videos'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the video info: ', result.info); 
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
</script>
