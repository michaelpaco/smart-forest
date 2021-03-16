export default ({ store, redirect, route }) => {
  const allowedRoutes = ["/signin", "/signup"];

  if (!store.state.loggedIn && !allowedRoutes.includes(route.path)) {
    redirect("signin");
  }
};
