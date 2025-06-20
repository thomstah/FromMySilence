import { useQuery } from '@tanstack/react-query';
import { supabase } from '../supabase-client';
import { MessageItem } from './MessageItem.tsx';

export interface Message {
  id: number;
  recipient: string;
  message: string;
  background: string;
}

const fetchMessages = async (): Promise<Message[]> => {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);

  return data as Message[];
};

export const MessageLists = () => {
  const { data, error, isLoading } = useQuery<Message[], Error>({
    queryKey: ['messages'],
    queryFn: fetchMessages,
  });

  if (isLoading) <div> Loading Heartfelt Messages... </div>;

  if (error) {
    Error: {
      error.message;
    }
  }

  console.log(data);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data?.map((message, key) => <MessageItem message={message} key={key} />)}
    </div>
  );
};
