import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '../supabase-client';

interface MessageInput {
  recipient: string;
  message: string;
}

const createMessage = async (message: MessageInput) => {
  const { data, error } = await supabase.from('letters').insert(message);

  if (error) throw new Error(error.message);

  return data;
};

export const CreateLetter = () => {
  const [recipient, setRecipient] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const { mutate } = useMutation({ mutationFn: createMessage });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate({ recipient, message });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="font-schoolBell flex h-[450px] w-[450px] flex-col bg-[url('/images/sky.png')] bg-cover bg-center text-xl">
          <div className="mx-10 mt-25 mb-7.5">
            <span className="w-full">
              To:{' '}
              <input
                type="text"
                id="sent_to"
                placeholder="Who is this for?"
                onChange={(event) => setRecipient(event.target.value)}
                className="border-none outline-none"
              />
            </span>
          </div>
          <div className="mx-10">
            <textarea
              value={message}
              id="messsage"
              placeholder="Write your message..."
              onChange={(event) => setMessage(event.target.value)}
              className="h-64 w-full resize-none border-none bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="my-2 flex w-full justify-center">
          <button
            type="submit"
            className="rounded-lg bg-[#ff3333] p-5 px-10 font-mono text-[#f4f3f2]"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
