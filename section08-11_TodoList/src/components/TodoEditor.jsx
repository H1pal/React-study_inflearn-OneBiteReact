import { useContext, useRef, useState } from "react";
import "./Todo.css";
import { TodoDispatchContext } from "../App";

function TodoEditor() {
  // Context에서 onCreate함수만 추출
  const { onCreate } = useContext(TodoDispatchContext);

  // 입력창의 텍스트 상태 관리
  const [content, setContent] = useState("");
  // 에러 상태 관리 (입력창이 비어있을 때 true로 변경됨)
  const [isError, setIsError] = useState(false);
  // DOM 요소 접근을 위한 Ref
  const inputRef = useRef();

  // 입력창에 글자가 타이핑될 때 실행되는 함수
  const onChangeContent = (e) => {
    setContent(e.target.value);

    if (isError) {
      setIsError(false);
    }
  };

  // 추가 버튼을 누르거나 엔터를 쳐서 폼을 제출할 때 실행되는 함수
  const onSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 브라우저 기본 동작 방지

    if (!content) {
      setIsError(true); // 에러 상태를 true로 변경 (스타일 및 placeholder 변경 유도)
      inputRef.current.focus(); // 사용자가 바로 타이핑할 수 있도록 입력창에 포커스 강제 이동
      return;
    }

    onCreate(content);
    setContent("");
  };

  return (
    <div id="edit_container">
      <div id="edit_title" className="title">
        <h3>새로운 Todo 작성하기</h3>
      </div>
      <div id="edit_form">
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            value={content}
            ref={inputRef} // 포커스 제어를 위해 위에서 만든 inputRef 연결
            onChange={onChangeContent}
            id="input-todo"
            placeholder={isError ? "할 일을 적어주세요" : "새로운 Todo..."}
            style={{ border: isError ? "1.5px solid red" : "1px solid black" }}
          />
          <button type="submit" id="bt-add">
            추가
          </button>
        </form>
      </div>
    </div>
  );
}

export default TodoEditor;
