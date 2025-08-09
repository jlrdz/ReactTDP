function Nav(props) {
  return (
    <nav>
      <ul>
        {props.links.map((link, index) => (
          <li key={link.text}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
