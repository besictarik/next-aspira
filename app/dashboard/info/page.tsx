import {
  fetchStudentCount,
  fetchProfessorCount,
  fetchCollegeCount,
  fetchMentorCount,
} from "@/app/lib/data";
import Card from "@/app/ui/dashboard/info/card-stats";
import CollegeIconSVG from "@/public/icons/graduation-cap-solid.svg";
import ProfileIconSVG from "@/public/icons/user-regular.svg"; // Modified ProfileIcon component
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const Info = async () => {
  // Fetching stats data from db

  const cookiestore = cookies();
  const supabase = createClient(cookiestore);
  const [
    numberOfStudents,
    numberOfProfessors,
    numberOfMentors,
    numberOfColleges,
  ] = await Promise.all([
    fetchStudentCount(supabase),
    fetchProfessorCount(supabase),
    fetchMentorCount(supabase),
    fetchCollegeCount(supabase),
  ]);

  const data = [
    {
      image: ProfileIconSVG,
      content: "Number of Students",
      number: numberOfStudents,
    },
    {
      image: ProfileIconSVG,
      content: "Number of Professors",
      number: numberOfProfessors,
      className: "bg-[#48a9f8]",
    },
    {
      image: ProfileIconSVG,
      content: "Number of Mentors",
      number: numberOfMentors,
      className: "bg-[#1bd084]",
    },
    {
      image: CollegeIconSVG,
      content: "Number of Colleges",
      number: numberOfColleges,
      className: "bg-[#8bc740]",
    },
  ];

  return (
    <div className="mt-10 flex flex-wrap gap-[30px]">
      {data.map((card, i) => (
        <Card
          key={i}
          image={card.image}
          content={card.content}
          number={card.number}
          className={`${card.className} basis-full sm:basis-[calc(50%-60px/2)] 2xl:basis-[calc(25%-90px/4)]`}
        />
      ))}
    </div>
  );
};

export default Info;
