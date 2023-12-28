import Link from "next/link";
import DeleteButton from "../delete-button";
import EditButton from "../edit-button";

const EditStudent = ({ id }: { id: number }) => {
  return (
    <Link href={`/dashboard/students/edit/${id}`}>
      <EditButton />
    </Link>
  );
};

export default EditStudent;
