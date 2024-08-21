import './App.css';
import { useSelector } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';
import Button from './component/Button';

function App() {
  const counterValue = useSelector(state => state.value)

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-[#272727]">
      <h1 className='font-semibold text-[#fff] text-center text-[1rem] sm:text-[2rem] uppercase mb-4'>
        create counter using redux toolkit
      </h1>
      <div className='w-full flex justify-center items-center gap-3 flex-col sm:flex-row'>
        <Button
          sliceMethod={increment}
          value={"Increment"}
          className={"bg-green-500"}
        />
        <h1
          className='px-4 py-1 rounded text-[1rem] text-[#fff] border-[4px] border-[#ffffff91]'>
          {counterValue}
        </h1>
        <Button
          sliceMethod={decrement}
          value={"decrement"}
          className={"bg-red-500"}
        />
      </div>
    </div>
  );
}

export default App;
