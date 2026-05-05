import './Sidebar.css'

export const Sidebar = ({ children }) => {
  return (
    <aside className="sidebar">
      {children}
    </aside>
  );
};
