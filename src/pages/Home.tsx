import { MessageLists } from '../components/MessageList';

export const Home = () => {
  return (
    <div className="pt-10">
      <h1> From My Silence </h1>
      <div>
        <MessageLists />
      </div>
    </div>
  );
};
