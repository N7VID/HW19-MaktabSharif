import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <header>header</header>
      <Outlet />
    </div>
  );
}
