//You are building a web application that allows users to upload files. The application has a feature to display a progress bar while the file is being uploaded. The upload process is handled by a third-party library that provides a callback function to track the progress.

Write a JavaScript function that takes the callback function as an argument and returns a new function that updates the progress bar accordingly.

 function createProgressBarUpdater(onProgress) {
  return function(loaded, total) {
    const progressBar = document.getElementById('progress-bar');
    const progress = (loaded / total) * 100;
    progressBar.style.width = `${progress}%`;
    onProgress(loaded, total);
  };
}
