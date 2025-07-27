import { useState, useEffect } from 'react';

const texts = [
  "Creating Better Democratic Living Condition for People",
  "Empowering Communities Through Education",
  "Promoting Human Rights and Democracy",
  "Building a Better Future for Nepal",
  "Carrying the Legacy of Martyr Dharma Bhakta Mathema"
];

export const AnimatedText = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isTyping) {
      const targetText = texts[currentText];
      if (displayText.length < targetText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(targetText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentText]);

  return (
    <div className="h-32 flex items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foundation-navy leading-tight">
        {displayText}
        <span className="animate-pulse">|</span>
      </h2>
    </div>
  );
};