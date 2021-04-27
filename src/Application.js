import { useSelector } from 'react-redux';

function Application() {
  const recipient = useSelector((state) => state.recipient);

  return (
    <main className="Application">
      <h1>Hello {recipient}</h1>
    </main>
  );
}

export default Application;
