function TodoItem({text,completed}){
  return (
    <div>
      <li>
        <span>{completed ? '👍' :'🔄️' }</span>
        <p>{text}</p>
        <p>❌</p>
      </li>
    </div>
  )
}
export {TodoItem}