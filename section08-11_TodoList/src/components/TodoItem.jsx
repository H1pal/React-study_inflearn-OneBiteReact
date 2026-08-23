import { useContext, memo } from "react";
import { TodoDispatchContext } from "../App";
import "./Todo.css";

const TodoItem = ({ id, content, timeStamp, isDone }) => {
  // Context에서 onUpdate 및 onDelete 함수 추출
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  // 조건부 스타일링
  const todoItemStyle = isDone
    ? {
        textDecoration: "line-through",
        opacity: ".6",
      }
    : {};

  return (
    <div id="todoitem_container">
      <div className="checkbox_col">
        {/* 체크박스를 클릭할 때마다 해당 아이템의 id를 넘겨주어 완료 상태를 토글시킴 */}
        <input
          type="checkbox"
          checked={isDone}
          name="input-items"
          id="input-items"
          onChange={() => onUpdate(id)}
        />
      </div>
      <div className="title_col">
        {/* todoItemStyle을 동적으로 적용 */}
        <span id="span-content" style={todoItemStyle}>
          {content}
        </span>
      </div>
      <div className="date_col">{new Date(timeStamp).toLocaleDateString()}</div>
      <div className="btn_col">
        {/* 삭제 버튼 클릭 시 해당 아이템의 id를 넘겨주어 배열에서 제거 */}
        <button id="bt-delete" onClick={() => onDelete(id)}>
          삭제
        </button>
      </div>
    </div>
  );
};

// 고차 컴포넌트(HOC)인 TodoItem 컴포넌트 자체를 React.memo로 감싸서 메모이제이션으로 최적화

// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 X
//   // F -> Props 바뀜 -> 리렌더링 O

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });
/* 
  자신이 가진 Props가 변경되지 않았다면, 
  부모 컴포넌트가 리렌더링되더라도 재연산하지 않고 이전 결과를 재사용
*/

export default memo(TodoItem);
