import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '../supabase-client';
import { useNavigate } from 'react-router-dom';

const backgrounds = [
  'blue.avif',
  'brown.avif',
  'burgundy.avif',
  'gray.avif',
  'grayay.avif',
  'green.avif',
  'lime.avif',
  'orange.avif',
  'pink.avif',
  'red.avif',
  'sky.avif',
  'yellow.avif',
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
  const [error, setError] = useState<string | null>(null);
  const [recipient, setRecipient] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [background, setBackground] = useState(() => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomIndex];
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);

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
    if (!recipient.trim() || !message.trim()) {
      setError('Recipient and/or message cannot be empty.');
      return;
    }
    if (!agreeToTerms) {
      setError('You must agree to the Terms of Submission before submitting.');
      return;
    }
    setError(null);
    mutate({ recipient, message, background });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-max flex-col justify-center"
    >
      {error && (
        <p className="mb-4 w-auto rounded-lg bg-red-100 px-4 py-2 text-center font-mono wrap-normal text-red-700">
          {error}
        </p>
      )}
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
                className="max-w-75 border-none outline-none"
                maxLength={25}
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
              className="h-64 w-full resize-none border-none bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="mt-2 ml-4 grid max-h-[450px] grid-cols-3 justify-items-center gap-2 overflow-y-auto align-middle md:mt-0 md:ml-4">
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

      <div className="flex w-full flex-col justify-center">
        <div className="mt-4 flex items-center justify-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            className="h-4 w-4"
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree to the{' '}
            <a
              href="/terms-of-submission"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff3333] hover:text-[#f20400]"
            >
              Terms of Submission
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="mx-auto mt-4 w-auto max-w-75 cursor-pointer rounded-lg bg-[#ff3333] p-5 px-25 font-mono text-[#f4f3f2] hover:bg-[#f20400] md:w-full md:max-w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
