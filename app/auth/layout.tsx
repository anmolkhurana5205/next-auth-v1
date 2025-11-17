const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,skyblue,blue)]">
      {children}
    </div>
  );
};

export default AuthLayout;
