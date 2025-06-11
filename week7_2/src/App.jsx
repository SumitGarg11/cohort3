import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

import { counterAtom } from "./store/atoms/counter";

function App() {
  return (
    <>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  );
}
function Counter() {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      {count}
      <Increase />
      <Decrease />
    </div>
  );
}
function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    setCount((count) => count - 1);
  }
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
