import DeleteButton from "../delete-button";

const DeleteProfessor = () => {
  const dispatch = async () => {
    "use server";
    console.log("Called");
  };

  return (
    <form action={dispatch}>
      <DeleteButton />
    </form>
  );
};

export default DeleteProfessor;
