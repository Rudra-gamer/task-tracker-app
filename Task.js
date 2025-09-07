function Task({ task, toggleComplete, deleteTask }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        marginBottom: "0.75rem",
        backgroundColor: "#ffffff",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.15)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")}
    >
      
      <span
        onClick={() => toggleComplete(task.id)}
        style={{
          cursor: "pointer",
          flexGrow: 1,
          fontSize: "1.125rem",
          color: task.completed ? "#9CA3AF" : "#1F2937",
          textDecoration: task.completed ? "line-through" : "none",
          transition: "color 0.2s ease",
        }}
      >
        {task.text}
      </span>
      
      <button
        onClick={() => deleteTask(task.id)}
        style={{
          marginLeft: "1rem",
          backgroundColor: "#EF4444",
          color: "#ffffff",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "0.375rem",
          cursor: "pointer",
          transition: "background-color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#DC2626")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EF4444")}
      >
        ❌ Delete
      </button>
      
    </div>
  );
}

export default Task;
