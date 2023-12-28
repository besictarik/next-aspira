import Card from "@/app/ui/dashboard/info/card-stats";
import CollegeIconSVG from "@/public/icons/building-regular.svg";
import ProfileIconSVG from "@/public/icons/user-regular.svg"; // Modified ProfileIcon component

const Info = () => {
  // Fetching stats data from db
  const numberOfStudents = 7;
  const numberOfProfessors = 6;
  const numberOfMentors = 6;
  const numberOfColleges = 13;

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
          className={`${card.className} basis-[calc(25%-90px/4)]`}
        />
      ))}
    </div>
  );
};

export default Info;
