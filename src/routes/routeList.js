const routeList = {
  unprotected: [
    { path: "/", Component: "Home", exact: true },
    { path: "/login", Component: "Login", exact: true },
    { path: "/about", Component: "About", exact: true },
    { path: "/contact", Component: "Contact", exact: true },
  ],
  protected: [
    { path: "/profile", Component: "Profile", exact: true },
    { path: "/cart", Component: "Cart", exact: true },
    { path: "/checkout", Component: "Checkout", exact: true },
  ],
};

export default routeList;
