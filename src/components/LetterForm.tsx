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
      <form onSubmit={handleSubmit} className="items-center-safe">
        <div className="h-[450px] w-[450px] items-center bg-[url('/images/sky.png')] bg-cover bg-center">
          <div>
            <input
              type="text"
              id="sent_to"
              placeholder="Who is this for?"
              onChange={(event) => setRecipient(event.target.value)}
              className="m-22 mx-15 mb-10"
            />
          </div>
          <div>
            <input
              type="text"
              id="messsage"
              placeholder="Write your message..."
              onChange={(event) => setMessage(event.target.value)}
              className="mx-15"
            />
          </div>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
