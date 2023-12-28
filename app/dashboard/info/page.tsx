import Card from "@/app/ui/dashboard/info/card-stats";
import CollegeIcon from "@/app/ui/icons/college-icon";
import ProfileIcon from "@/app/ui/icons/profile-icon";

const Info = () => {
  // Fetching stats data from db
  const numberOfStudents = 7;
  const numberOfProfessors = 6;
  const numberOfMentors = 6;
  const numberOfColleges = 13;

  const data = [
    {
      image: ProfileIcon,
      content: "Number of Students",
      number: numberOfStudents,
    },
    {
      image: ProfileIcon,
      content: "Number of Professors",
      number: numberOfProfessors,
    },
    {
      image: ProfileIcon,
      content: "Number of Mentors",
      number: numberOfMentors,
    },
    {
      image: CollegeIcon,
      content: "Number of Colleges",
      number: numberOfColleges,
    },
  ];

  return (
    <div className="flex flex-wrap">
      {data.map((card, i) => (
        <Card
          key={i}
          image={card.image}
          content={card.content}
          number={card.number}
        />
      ))}
    </div>
  );
};

export default Info;
