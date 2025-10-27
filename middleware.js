export { default } from "next-auth/middleware";

//all protected routes by middleware
export const config = {
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
