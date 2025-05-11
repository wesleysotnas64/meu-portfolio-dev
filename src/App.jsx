import { useEffect, useState } from 'react';
import PortraitLayout from './pages/portraitLayout/PortraitLayout';
import './App.css';


function App() {
  const [isPortrait, setIsPortrait] = useState(true);
  
  const checkAspectRatio = () => {
    const aspectRatio = window.innerWidth / window.innerHeight;
    setIsPortrait(aspectRatio < 1);
  };

  useEffect(() => {

    checkAspectRatio();
    window.addEventListener('resize', checkAspectRatio);

    return () => {
      window.removeEventListener('resize', checkAspectRatio);
    };

  }, []);

  return (
    <>
      {isPortrait ? <PortraitLayout /> : <h1>LandscapeLayout</h1>}
    </>
  );
}

export default App;