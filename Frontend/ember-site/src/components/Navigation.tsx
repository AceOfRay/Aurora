import { Dispatch, SetStateAction } from "react";
import "../styles/nav.css";

interface NavigationProps {
    setPage: Dispatch<SetStateAction<string>>;
  }
  

export default function Navigation({setPage} : NavigationProps) {
    return (
        <nav className="nav">
          <ul className="navList">
            <li
              className="listObject"
              onClick={() => {
                setPage("Home");
              }}
            >
              Home
            </li>
            <li
              className="listObject"
              onClick={() => {
                setPage("Personality");
              }}
            >
              Personality
            </li>
            <li
              className="listObject"
              onClick={() => {
                setPage("Projects");
              }}
            >
              Projects
            </li>
            <li
              className="listObject"
              onClick={() => {
                setPage("Contacts");
              }}
            >
              Contact
            </li>
          </ul>
        </nav>
    )
}