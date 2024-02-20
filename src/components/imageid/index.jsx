import React, { useRef, useEffect, useState } from 'react';
import * as tmImage from '@teachablemachine/image';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './style.css';

const TeachableMachineImageModel = () => {
  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(0);
  const imageUploadRef = useRef(null);
  const imageDisplayRef = useRef(null);
  const labelContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState(null);
  const [highestProbabilityDisease, setHighestProbabilityDisease] = useState(null);
  const [pdf, setPdf] = useState(null);

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
      generatePDF(imgElement, prediction);
    } else {
      console.error('Model is not loaded yet. Please wait for the model to load before uploading an image.');
    }
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    const imgElement = document.createElement('img');
    const reader = new FileReader();

    reader.onload = function (event) {
      imgElement.src = event.target.result;
      imageDisplayRef.current.innerHTML = ''; // Clear previous image
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
    labelContainer.innerHTML = ''; // Clear previous predictions

    let maxProbability = 0;
    let maxProbabilityIndex = -1;

    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction = `${prediction[i].className}: ${(
        prediction[i].probability * 100
      ).toFixed(2)}%`;

      const predictionDiv = document.createElement('div');
      predictionDiv.textContent = classPrediction;
      labelContainer.appendChild(predictionDiv);

      // Highlight the disease with the highest probability
      if (prediction[i].probability > maxProbability) {
        maxProbability = prediction[i].probability;
        maxProbabilityIndex = i;
      }
    }

    if (maxProbabilityIndex !== -1) {
      labelContainer.children[maxProbabilityIndex].classList.add('highlight');
      setHighestProbabilityDisease(prediction[maxProbabilityIndex].className);
    }
  };

  // Generate a PDF with the image and predictions
  const generatePDF = async (imgElement, prediction) => {
    const canvas = await html2canvas(imageDisplayRef.current);

    const pdf = new jsPDF();
    pdf.text('Skin Disease Report', 15, 15);

    // Add image to the PDF
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 15, 20, 180, 120);

    // Add predictions to the PDF
    let yPos = 160;
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction = `${prediction[i].className}: ${(
        prediction[i].probability * 100
      ).toFixed(2)}%`;
      pdf.text(classPrediction, 15, yPos);
      yPos += 10;
    }

    // Save the generated PDF
    setPdf(pdf);
  };

  useEffect(() => {
    loadModel();
  }, []);

  const handleDownloadPDF = () => {
    if (pdf !== null) {
      const pdfBlob = new Blob([pdf.output('blob')], { type: 'application/pdf' });
      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'skin_disease_report.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.error('No PDF available to download.');
      alert("No report available to download.Please scan a image");
    }
  };

  return (
    <div>
      <div>{text}</div>
      <div>
        <h1>Input your Image here</h1>
      </div>
      <form onSubmit={handleImageUpload}>
        <input type="file" accept="image/*" ref={imageUploadRef} onChange={handleImageChange} />
        <button type="submit">Submit</button>
      </form>
      <div className="imagecontainer">
        <div ref={imageDisplayRef} id="image-display"></div>
      </div>
      {loading && <div>Model is loading...</div>}
      <div className="labelwrap" ref={labelContainerRef} id="label-container"></div>
      {highestProbabilityDisease && (
        <div className="result-message">
          Your skin disease is most likely to be {highestProbabilityDisease} with the highest probability.
        </div>
      )}
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default TeachableMachineImageModel;
