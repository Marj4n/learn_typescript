type GreetProps = {
  name?: string;
  messagesCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messagesCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messagesCount} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};
