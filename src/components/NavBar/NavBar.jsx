import NavItem from "../NavItem/NavItem";

export default function NavBar() {
  return (
    <ul className="flex items-center gap-20">
      <NavItem>Home</NavItem>
      <NavItem>Boot Camps</NavItem>
      <NavItem>About Us</NavItem>
      <NavItem>Contact Us</NavItem>
    </ul>
  );
}
