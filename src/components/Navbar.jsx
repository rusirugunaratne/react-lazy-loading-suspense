import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav>
      {links.map((link) => (
        <Link style={{ marginRight: "10px" }} to={link.path}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
