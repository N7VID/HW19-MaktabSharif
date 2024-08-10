import NavItem from "../NavItem/NavItem";

export default function NavBar() {
  return (
    <ul className="flex items-center gap-20">
      <NavItem path={"/"}>Home</NavItem>

      <NavItem path={"/boot-camps"}>Boot Camps</NavItem>

      <NavItem path={"/about"}>About Us</NavItem>

      <NavItem path={"/contact"}>Contact Us</NavItem>
    </ul>
  );
}
