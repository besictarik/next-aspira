import Link from "next/link";
import DeleteButton from "../delete-button";
import EditButton from "../edit-button";

const EditMentor = ({ id }: { id: number }) => {
  return (
    <Link href={`/dashboard/mentors/edit/${id}`}>
      <EditButton />
    </Link>
  );
};

export default EditMentor;
