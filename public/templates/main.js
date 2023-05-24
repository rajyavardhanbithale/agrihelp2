const fileList = ['realistic_day_time_farm_field_with_crops.jpeg',
  'realistic_farm_land_with_crops_and_tractor_and_oth.jpeg',
  'realistic_farm_land_with_crops_day.jpeg'];

// Generate a random index within the range of the file list length
const randomIndex = Math.floor(Math.random() * fileList.length);

// Get the random file using the random index
const randomFile = fileList[randomIndex];


console.log(randomFile)

const panoramaImage = new PANOLENS.ImagePanorama(`images/${randomFile}`);
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);
