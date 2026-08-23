import { useContext, useMemo, useState } from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

function TodoList() {
  // Context에서 todo만 추출
  const { todo } = useContext(TodoStateContext);

  // 성능 최적화(useMemo): todo 배열이 변경될 때만 전체/완료/미완료 개수를 연산
  // 검색어를 타이핑하는 등 다른 상태가 바뀔 때 무거운 반복 연산을 스킵
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]); // todo 데이터가 추가, 삭제, 수정될 때만 계산을 다시 수행함(dependency)

  // 검색창에 입력된 텍스트 상태 관리
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // 검색어가 비어있으면 현재 todo 자체를, 입력되어 있으면 해당 글자가 포함된 todo를 반환
  const getSearchResult = () => {
    return searchValue === ""
      ? todo
      : todo.filter((item) =>
          item.content.toLowerCase().includes(searchValue.toLowerCase()),
        );
  };

  return (
    <div id="todoList_container">
      <div id="search_title" className="title">
        <h3>TodoList</h3>
      </div>

      {/* 상단 통계 영역: useMemo로 계산한 개수들을 화면에 렌더링 */}
      <div id="todo-count_container">
        <div className="count_content">
          <p>
            <strong>전체: {totalCount}</strong>
          </p>
        </div>
        <div className="count_content">
          <p>
            <strong>완료된 할 일: {doneCount}</strong>
          </p>
        </div>
        <div className="count_content">
          <p>
            <strong>미완료된 할 일: {notDoneCount}</strong>
          </p>
        </div>
      </div>

      <div id="search_form">
        {/* 검색 입력창: 엔터 입력 시 새로고침이 방지되도록 하게 설정 */}
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={searchValue}
            onChange={onChangeSearch}
            id="input-search"
            placeholder="할 일을 검색하세요"
          />
        </form>
      </div>

      <div id="todoItemList">
        {
          // 필터링된 배열을 순회하며 개별 TodoItem 컴포넌트로 변환하여 출력
          // React가 각 요소를 식별하고 효율적으로 렌더링할 수 있도록 고유한 key(it.id)를 지정
          getSearchResult().map((td) => (
            <TodoItem key={td.id} {...td} />
          ))
        }
      </div>
    </div>
  );
}
export default TodoList;
