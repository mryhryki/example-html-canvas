import "./App.css";
import { useCanvasRef } from "./hooks/useCanvas.ts";
import { useSampleImages } from "./hooks/useSampleImages.ts";

function App() {
  const { sampleImageURLs, selectedImageURL, setSelectedImageURL } = useSampleImages();
  const { setCanvasRef } = useCanvasRef({ imageURL: selectedImageURL });

  return (
    <main>
      <h1>Example HTML Canvas</h1>
      <p>
        <select value={selectedImageURL} onChange={(event) => setSelectedImageURL(event.target.value)}>
          {sampleImageURLs.map((url) => (
            <option key={url}>{url}</option>
          ))}
        </select>
      </p>
      <div style={{ width: "50vw", height: "50vh" }}>
        <canvas ref={setCanvasRef} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}/>
      </div>
    </main>
  );
}

export default App;
