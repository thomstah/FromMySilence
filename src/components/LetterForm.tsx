import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '../supabase-client';
import { useNavigate } from 'react-router-dom';

const backgrounds = [
  'blue.png',
  'brown.png',
  'burgundy.png',
  'gray.png',
  'grayay.png',
  'green.png',
  'lime.png',
  'orange.png',
  'pink.png',
  'red.png',
  'sky.png',
  'yellow.png',
];

interface MessageInput {
  recipient: string;
  message: string;
  background: string;
}

const createMessage = async (message: MessageInput) => {
  const { data, error } = await supabase.from('messages').insert(message);

  if (error) throw new Error(error.message);

  return data;
};

export const CreateLetter = () => {
  const [recipient, setRecipient] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [background, setBackground] = useState('blue.png');

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      console.error('Error Creating message: ', error);
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate({ recipient, message, background });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-max flex-col justify-center"
    >
      <div className="flex flex-col justify-center md:flex-row">
        <div
          className="font-schoolBell flex h-[400px] w-[400px] flex-col bg-cover bg-center text-lg md:h-[450px] md:w-[450px] md:text-2xl"
          style={{ backgroundImage: `url('images/${background}')` }}
        >
          <div className="mx-10 mt-22.5 mb-6 md:mt-25 md:mb-7.5">
            <span className="w-full">
              To:{' '}
              <input
                type="text"
                id="sent_to"
                placeholder="Who is this for?"
                onChange={(event) => setRecipient(event.target.value)}
                className="w-75 border-none outline-none"
              />
            </span>
          </div>
          <div className="mx-10">
            <textarea
              value={message}
              id="messsage"
              placeholder="Write your message..."
              onChange={(event) => setMessage(event.target.value)}
              maxLength={170}
              className="max-h-64 w-full resize-none border-none bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="ml-4 grid max-h-[450px] grid-cols-3 justify-items-center gap-2 overflow-y-auto align-middle md:ml-4">
          {backgrounds.map((bg) => (
            <img
              key={bg}
              src={`./images/${bg}`}
              alt={bg}
              onClick={() => setBackground(bg)}
              className={`h-16 w-16 cursor-pointer border-2 ${
                background === bg ? 'border-black' : 'border-transparent'
              }`}
            />
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 cursor-pointer rounded-lg bg-[#ff3333] p-5 px-7.5 font-mono text-[#f4f3f2] hover:bg-[#f20400] md:px-10"
      >
        Submit
      </button>
    </form>
  );
};
