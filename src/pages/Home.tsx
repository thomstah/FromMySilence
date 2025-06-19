import { MessageLists } from '../components/MessageList';

export const Home = () => {
  return (
    <div className="pt-10">
      <div className="my-10 flex w-full justify-center">
        <h1 className="font-mono text-4xl font-bold">From: My Silence</h1>
      </div>
      <div>
        <MessageLists />
      </div>
    </div>
  );
};
