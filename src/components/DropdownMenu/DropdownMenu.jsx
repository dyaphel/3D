import React from "react";
import { Link } from "react-router-dom";
import "./DropdownMenu.css";

function DropdownMenu({ type, setShape, setAnimation, setCharacter }) {
  const figureItems = [
    { label: "Cube", value: "Cube" },
    { label: "Sphere", value: "Sphere" },
    { label: "Pyramid", value: "Pyramid" },
    { label: "Pentagon", value: "Pentagon" },
  ];

  const animationItems = [
    { label: "Bounce", value: "Bounce" },
    { label: "Spin", value: "Spin" },
    { label: "Fade", value: "Fade" },
    { label: "Slide", value: "Slide" },
  ];

  const characterItems = [
    { label: "Anime Girl", value: "anime_girl" },
   
  ];

  return (
    <div className="dropdown-menu">
      <ul>
        {type === "shapes" &&
          figureItems.map((item) => (
            <Link
              key={item.value}
              to={`/${item.value.toLowerCase()}`}
              className="dropdown-item"
              onClick={() => setShape(item.value)}
            >
              {item.label}
            </Link>
          ))}

        {type === "animations" &&
          animationItems.map((item) => (
            <Link
              key={item.value}
              to={`/${item.value.toLowerCase()}`}
              className="dropdown-item"
              onClick={() => setAnimation(item.value)}
            >
              {item.label}
            </Link>
          ))}

        {type === "characters" &&
          characterItems.map((item) => (
            <Link
              key={item.value}
              to={`/${item.value}`}
              className="dropdown-item"
              onClick={() => setCharacter(item.value)}
            >
              {item.label}
            </Link>
          ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
