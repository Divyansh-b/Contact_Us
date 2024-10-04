import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${styles.Navigation} container`}>
      <div className="logo">
        <img src="/images/Frame 2 1.png" alt="do some coding logo" />
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navigation;
