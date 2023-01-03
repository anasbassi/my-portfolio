const NavBar = () => {
  return (
    <>
    <section class="hambugger font display-none">
      <img class="close-menu" src="images/Icon.png" alt="close-menu" />
      <ul>
        <li><a class="menu-link" href="#portfolio">Portfolio</a></li>
        <li><a class="menu-link" href="#about">About</a></li>
        <li><a class="menu-link" href="#contact">Contact</a></li>
      </ul>
    </section>
    <header class="header fixed-top font">
      <a href="">
        <h2 class="logo">Anas</h2>  
      </a>
      <nav class="navbar">
        <ul>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul> 
      </nav> 
    </header>
    </>
  )
};

export default NavBar;
