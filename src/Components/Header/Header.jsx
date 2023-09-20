import "./Header.scss";
import { Container } from "./../Utilities/Container/Container";
import { Button } from "./../Utilities/Button/Button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ListItem = ({
  name,
  styleName,
  dropdownElement,
  dropdownParent,
  link,
}) => {
  const navbarActive = styleName + " active";
  return (
    <li className={dropdownParent}>
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? navbarActive : styleName)}
      >
        {name}
      </NavLink>
      {dropdownElement}
    </li>
  );
};

const DropDownList = () => {
  const item = [
    { name: "Yoga", link: "/yoga" },
    { name: "Pilates", link: "/pilates" },
    { name: "Strength Training", link: "/strength-training" },
    { name: "Zumba", link: "/zumba" },
    { name: "Meditation", link: "/meditation" },
    { name: "Nutrition", link: "/nutrition" },
  ];
  return (
    <>
      <div className="dropdown-card">
        <ul className="dropdown-menu-item">
          {item.map((val, idx) => {
            return (
              <ListItem key={idx} styleName="dropdown-menu-link" {...val} />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export const Header = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substr(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // Clear the hash from the URL without affecting browser history
        navigate(".", { replace: true });
      }
    }
  }, [hash, navigate]);

  const joinUsHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const item = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: undefined },
    { name: "Contact", link: "/#contact" },
    { name: "Blogs", link: "/blogs" },
  ];
  return (
    <header className="header">
      <Container>
        <div className="navbar-items">
          <img
            src="/assets/fws_logo_horizontal.jpeg"
            alt="Fitness Studio Wave Logo"
            className="logo"
          ></img>

          <nav className="main-nav">
            <ul className="main-nav-list">
              {item.map((val, idx) => {
                let dropdownElement = <></>;
                let styleName = "main-nav-link";
                let dropdownParent = "list-item";
                if (val.name === "Services") {
                  styleName = "main-nav-link dropdown-btn";
                  dropdownElement = <DropDownList />;
                  dropdownParent = "dropdown";
                }
                return (
                  <ListItem
                    key={idx}
                    name={val.name}
                    styleName={styleName}
                    dropdownElement={dropdownElement}
                    dropdownParent={dropdownParent}
                    link={val.link}
                  />
                );
              })}
            </ul>
          </nav>
          <Button
            styleName="button-primary"
            contextName="Join us"
            clickHandler={joinUsHandler}
          />
        </div>
      </Container>
    </header>
  );
};
