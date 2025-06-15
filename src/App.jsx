import Break from './containers/Break';
import Session from './containers/Session';
import Timer from './containers/Timer';
import Controls from './containers/Controls';
import Socials from './components/Socials';
import './App.css';

function App() {
  return (
    <>
      <div className="h-screen grid place-content-center bg-zinc-800 text-white text-center">
        <h1 className="text-3xl">25 + 5 Clock</h1>
        <div className="mx-2 my-4 flex space-x-10">
          <Break />
          <Session />
        </div>
        <Timer />
        <div className="my-4">
          <Controls />
        </div>
        <Socials />
      </div>
    </>
  );
}

export default App;
