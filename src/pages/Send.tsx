import { CreateLetter } from "../components/LetterForm";

export const SendLetter = () => {
  return (
    <div className="container mt-25 flex justify-center pt-10">
      <h2> Send a Letter </h2>
      <CreateLetter />
    </div>
  );
};
