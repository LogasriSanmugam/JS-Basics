//You are building a web application that allows users to upload files. The application has a feature to display a progress
//bar while the file is being uploaded. The upload process is handled by a third-party library that provides a callback function to track the progress.Write a JavaScript function that takes the callback function as an argument and returns a new function that updates the progress bar accordingly.

  class ProgressBarUpdater {
  constructor(onProgress) {
    this.progressBar = document.getElementById('progress-bar');
    this.onProgress = onProgress;
  }

  update(loaded, total) {
    const progress = (loaded / total) * 100;
    this.progressBar.style.width = `${progress}%`;
    this.onProgress(loaded, total);
  }
}

function createProgressBarUpdater(onProgress) {
  return new ProgressBarUpdater(onProgress).update.bind(new ProgressBarUpdater(onProgress));
}
