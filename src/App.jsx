import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

function App() {
    const counterValue = useSelector(state => state.value)
  const dispatch = useDispatch()

  return (
    <div className="w-full h-screen flex justify-center items-center bg-indigo-500">
      <h1>
        create counter using redux toolkit
        {counterValue}
      </h1>
    </div>
  );
}

export default App;
