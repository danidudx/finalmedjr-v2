import React, { useRef, useEffect, useState } from 'react';
import * as tmImage from '@teachablemachine/image';
import './style.css';

const TeachableMachineImageModel = () => {
  const [model, setModel] = React.useState(null);
  const [maxPredictions, setMaxPredictions] = React.useState(0);
  const imageUploadRef = useRef(null);
  const imageDisplayRef = useRef(null);
  const labelContainerRef = useRef(null);
  const [loading, setLoading] = React.useState(true);
  const [text, setText] = useState(null);

  // Load the image model
  const loadModel = async () => {
    const modelURL = 'model.json';
    const metadataURL = 'metadata.json';

    const loadedModel = await tmImage.load(modelURL, metadataURL);
    setModel(loadedModel);
    setMaxPredictions(loadedModel.getTotalClasses());
    setLoading(false);
    setText('Model Loaded');
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const imgElement = imageDisplayRef.current.firstChild;
    if (model !== null) {
      const prediction = await predict(imgElement);
      displayPredictions(prediction);
    } else {
      console.error('Model is not loaded yet. Please wait for the model to load before uploading an image.');
    }
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    const imgElement = document.createElement("img");
    const reader = new FileReader();

    reader.onload = function (event) {
      imgElement.src = event.target.result;
      imageDisplayRef.current.innerHTML = ""; // Clear previous image
      imageDisplayRef.current.appendChild(imgElement);
    };

    reader.readAsDataURL(image);
  };

  // Run the image through the image model and get predictions
  const predict = async (imgElement) => {
    const prediction = await model.predict(imgElement);
    return prediction;
  };

  // Display predictions in the label container
  const displayPredictions = (prediction) => {
    const labelContainer = labelContainerRef.current;
    labelContainer.innerHTML = ""; // Clear previous predictions

    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction = `${prediction[i].className}: ${prediction[i].probability.toFixed(2)}`;
      const predictionDiv = document.createElement("div");
      predictionDiv.textContent = classPrediction;
      labelContainer.appendChild(predictionDiv);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  return (
    <div>
      <div>{text}</div>
      <div>Teachable Machine Image Model</div>
      <form onSubmit={handleImageUpload}>
        <input type="file" accept="image/*" ref={imageUploadRef} onChange={handleImageChange} />
        <button type="submit">Submit</button>
      </form>
      <div className='imagecontainer'>
        <div ref={imageDisplayRef} id="image-display"></div>
      </div>
      {loading && <div>Model is loading...</div>}
      <div ref={labelContainerRef} id="label-container"></div>
    </div>
  );
};

export default TeachableMachineImageModel;