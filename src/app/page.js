'use client';

import { useEffect, useState } from "react";
import SubjectCard from '@/components/SubjectCard';

export default function Home() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await fetch('/data/questions.json');
      if (response.ok) {
        const data = await response.json();
        setSubjects(data.subjects);
        console.log(data);
      } else {
        console.error("Failed to fetch subjects");
      }
    };
    fetchSubjects();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h1 className="mb-6 text-4xl font-bold text-blue-600">Welcome to the English Quiz App</h1>
      <p className="mb-8 text-lg text-gray-700">Select a Day Each day Contain 60 Questions Except last Day</p>

      <div className="grid w-full max-w-screen-lg grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.length > 0 ? (
          subjects.map((subject) => (
            <SubjectCard key={subject.name} subject={subject} />
          ))
        ) : (
          <p className="text-lg text-center text-gray-500 animate-pulse">Loading subjects...</p>
        )}
      </div>
    </div>
  );
}
