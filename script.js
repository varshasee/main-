import { useState, useEffect } from 'react';
import { Upload, Heart, Scissors, Sparkles, Star } from 'lucide-react';
import priyaImage from 'figma:asset/843a4d4fd5ec4c8221d3b8819240689f8741de78.png';

export default function App() {
  const [daysSinceShave, setDaysSinceShave] = useState(54);
  const [daysUntilArrival, setDaysUntilArrival] = useState(27);
  const [currentLength, setCurrentLength] = useState(21.6);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const messages = [
    "priya started braiding herself out of boredom",
    "i caught priya trying to escape through my leggings",
    "priya has developed her own personality and is demanding snacks",
    "she's one week away from being declared a national park"
  ];

  useEffect(() => {
    const startDate = new Date('2024-10-01');
    const today = new Date();
    const diff = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDaysSinceShave(diffDays);
    setCurrentLength(+(diffDays * 0.4 / 10).toFixed(1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(prev => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ❌ TypeScript
  // const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {

  // ✔️ JavaScript version
  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setTimeout(() => {
        setUploadComplete(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    }
  };

  // ❌ TS: (e: React.DragEvent)
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setTimeout(() => {
        setUploadComplete(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const stages = [
    { day: 0, length: "0 cm", label: "fresh start" },
    { day: 7, length: "0.3 cm", label: "peachy keen" },
    { day: 14, length: "0.6 cm", label: "getting fuzzy" },
    { day: 21, length: "0.8 cm", label: "soft & wild" },
    { day: 30, length: "1.2 cm", label: "full bush mode" },
    { day: 40, length: "1.6 cm", label: "forest vibes" },
    { day: 50, length: "2.0 cm", label: "untamed" },
    { day: 60, length: "2.4 cm", label: "jungle queen" },
  ];

  const currentStageIndex = Math.min(
    Math.floor(daysSinceShave / 10),
    stages.length - 1
  );

  // The rest of the JSX stays EXACTLY the same (no TypeScript inside JSX)
  // ...
}
