import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

interface CounterData {
  id: number;
  number: number;
  label: string;
  suffix?: string;
}

const counters: CounterData[] = [
  {
    id: 1,
    number: 75,
    label: "People Reached Through Awareness Programs",
    suffix: "+"
  },
  {
    id: 2,
    number: 25,
    label: "Community Engagement Projects",
    suffix: "+"
  },
  {
    id: 3,
    number: 15,
    label: "Programs Successfully Completed",
    suffix: "+"
  },
  {
    id: 4,
    number: 8,
    label: "Years of Dedicated Service",
    suffix: "+"
  }
];

export const AnimatedCounters = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('counters-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="counters-section" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Impact <span className="text-secondary">In Numbers</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            See how we're making a difference in communities across Nepal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter) => (
            <div 
              key={counter.id} 
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-4">
                {startCounting ? (
                  <CountUp
                    end={counter.number}
                    duration={2.5}
                    delay={counter.id * 0.2}
                    suffix={counter.suffix || ''}
                  />
                ) : (
                  '0'
                )}
              </div>
              <div className="text-lg font-medium">{counter.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};