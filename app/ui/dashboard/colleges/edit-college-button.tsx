import Link from "next/link";
import DeleteButton from "../delete-button";
import EditButton from "../edit-button";

const EditCollege = ({ id }: { id: number }) => {
  return (
    <Link href={`/dashboard/colleges/edit/${id}`}>
      <EditButton />
    </Link>
  );
};

export default EditCollege;
