import Link from "next/link";
import DeleteButton from "../delete-button";
import EditButton from "../edit-button";

const EditProfessor = ({ id }: { id: number }) => {
  return (
    <Link href={`/dashboard/professors/edit/${id}`}>
      <EditButton />
    </Link>
  );
};

export default EditProfessor;
