function resizeImage() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const image = new Image();
        image.onload = function() {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          const maxWidth = 300;
          const maxHeight = 300;
          
          let width = image.width;
          let height = image.height;
          
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          context.drawImage(image, 0, 0, width, height);
          
          const previewImage = document.getElementById('previewImage');
          previewImage.src = canvas.toDataURL('image/jpeg');
          previewImage.style.display = 'inline';
          
          const downloadLink = document.getElementById('downloadLink');
          downloadLink.href = canvas.toDataURL('image/jpeg');
          downloadLink.style.display = 'inline';
        };
        image.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  function compressAudio() {
    const input = document.getElementById('audioInput');
    const file = input.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const audio = new Audio();
        audio.src = e.target.result;
        audio.controls = true;
        
        const previewAudio = document.getElementById('previewAudio');
        previewAudio.src = audio.src;
        previewAudio.style.display = 'inline';
        
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = audio.src;
        downloadLink.style.display = 'inline';
      };
      reader.readAsDataURL(file);
    }
    
  }
  
  function deleteFile(elementId) {
    const element = document.getElementById(elementId);
    element.src = '#';
    element.style.display = 'none';
    
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = '#';
    downloadLink.style.display = 'none';
  }
  