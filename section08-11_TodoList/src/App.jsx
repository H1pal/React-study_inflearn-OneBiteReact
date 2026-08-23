import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { useCallback, useMemo, useReducer, useRef, createContext } from "react";
export const TodoStateContext = createContext(); // todo state 전용 context
export const TodoDispatchContext = createContext(); // setState 세터함수들 전용 context

// useReducer에서 거쳐갈 함수
function reducer(state, action) {
  // 현재 상태와 새로운 값을 인자로 받음
  // setTodo에서 넘겨받은 type으로 setState의 상태 로직 구분
  switch (action.type) {
    case "CREATE":
      return [action.newItem, ...state];

    case "UPDATE":
      // 컴포넌트가 업데이트된 id의 해당 아이템의 상태 변경
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it,
      );

    case "DELETE":
      // 삭제 셀렉팅된 해당 item의 id를 기준으로 배제해 todo를 재생성
      return state.filter((it) => it.id !== action.targetId);
    default:
      // 오류 방지
      return state;
  }
}

const mockData = {
  id: 0,
  content: "빨래하기",
  timeStamp: new Date().getTime(),
  isDone: true,
};

function App() {
  // const [todo, setTodo] = useState([]);
  const [todo, setTodo] = useReducer(reducer, [mockData]);
  // useReducer를 이용하여 setState의 다양한 종류 로직을 직관화
  const idRef = useRef(1); // id를 ref로 관리

  const onCreate = (content) => {
    setTodo({
      type: "CREATE",
      newItem: {
        id: idRef.current++, // todoItem 각각에 고유한 id를 갖도록 한다
        content: content,
        timeStamp: new Date().getTime(),
        isDone: false,
      },
    });
  };

  // useCallback을 이용하여 함수 메모이제이션 -> 성능 최적화
  const onUpdate = useCallback((targetId) => {
    setTodo({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    setTodo({
      type: "DELETE",
      targetId,
    });
  }, []);

  // 상태 세터함수들을 값 메모이제이션으로 최적화(리렌더링 최초 한 번만 실행)
  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      {/* 
          제때에 사용되지 않음에도 전달만을 목적으로 props를 받는 props drilling 현상 방지
          (유지 보수성 향상, 불필요한 렌더링 방지)
        */}
      <TodoStateContext.Provider value={{ todo }}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
