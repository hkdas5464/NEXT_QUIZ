'use client';
// import Image from 'next/image';
import { useRouter } from "next/navigation";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
   
export default function SubjectCard({ subject }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/quiz/${subject.name.toLowerCase()}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative overflow-hidden transition-shadow duration-300 transform border rounded-lg shadow-lg cursor-pointer group hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
    >
      {/* Subject Image with slight zoom effect */}
      {/* <div className="overflow-hidden">
        <Image
          width={400} 
          height={300} 
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
      </div> */}


      <Card key={Math.random()} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
          <CardBody className="p-0 overflow-visible">
            <Image
          alt={`${subject.name} image`}
          className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={subject.image} 
              width="90%"
            />
          </CardBody>
          <CardFooter className="justify-between text-small">
            <b>{subject.name}</b>
            <p className="text-default-500">{subject.questions.length} Questions</p>
          </CardFooter>
        </Card>


      




      

      {/* Gradient Background for Text */}
    

      {/* Decoration Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 transform scale-x-0 bg-gradient-to-r from-blue-400 to-green-400 group-hover:scale-x-100"></div>
    </div>
  );
}
