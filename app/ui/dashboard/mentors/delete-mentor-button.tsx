import DeleteButton from "../delete-button";

const DeleteMentor = () => {
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

export default DeleteMentor;
