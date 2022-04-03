import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import useInterval from '@use-it/interval';




export default function Home () {

    let posenet;
    const videoRef = useRef();
  const [start, setStart] = useState(false);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);

    
    useInterval(() => {
        console.log('Here')
        console.log(posenet)
        if (posenet) {
          posenet.on('pose', (error, results) => {
            if (error) {
              console.error(error);
              return;
            }
            setResult(results);
            console.log(results)
          });
        }
      }, 100);

    useEffect(() => {
        posenet = ml5.poseNet("https://teachablemachine.withgoogle.com/models/8lVwdRPE7/model.json", () => {
          navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
              videoRef.current.srcObject = stream;
              videoRef.current.play();
              setLoaded(true);
            });
        });
      }, []);
      const toggle = () => {
        setStart(!start);
        setResult([]);
      }
    return(
        <div>
            {result.length > 0 &&
        <div className="results">{result}
          </div>}
          {loaded && (
            <button onClick={() => toggle()}>
              {start ? "Stop" : "Start"}
            </button>
          )}
          <video
            ref={videoRef}
            style={{ transform: "scale(-1, 1)" }}
            width="300"
            height="150"
          />
        </div>
    )
}