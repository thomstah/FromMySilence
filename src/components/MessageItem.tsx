import type { Message } from './MessageList';
interface Props {
  message: Message;
}

export const MessageItem = ({ message }: Props) => {
  return (
    <div>
      <div>
        <div
          style={{
            width: '400px',
            height: '400px',
            backgroundImage: `url(./images/${message.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="font-schoolBell justify center flex text-xl"
        >
          <div className="mx-10 mt-22.5">
            <div className="mb-6">
              <span className="w-full">To: {message.recipient}</span>
            </div>
            <div className="h-md">
              <p className="max-h-64 max-w-80 text-pretty wrap-break-word text-clip">
                {message.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
