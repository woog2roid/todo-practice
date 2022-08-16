# todo-practice

> NextJS + Recoil + Supabase로 구글 로그인이 가능한 투두 예제 제작

[실제 실행](https://todo-practice-boszi.run.goorm.io/#)

### 참고사항

- CSS는 건드리지 않았습니다.
- api 부분에 현재 프로젝트와 같이 CRUD를 위주로 제작할 예정입니다.
  - getTodo(id), getTodos, addTodo, deleteTodo, updateTodo
- auth에는 OAuth 관련한 api를 넣었습니다
  - getUser, getSession은 따로 분리하긴 하였지만 복잡하지 않은 것들은 프론트에서 직접 들어가도 될 것 같다는 생각이 듭니다.
  - pages/index에 onAuthStateChange 관련해서는 Hooks를 따로 제작을 해도 되고, 아니면 프론트에서 직접 짜도 될 것 같습니다.
