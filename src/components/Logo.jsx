export const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise IMG sont accessible dans "public" */}
      <img src="/public/logo192.png" alt="Logo react" />
      <h3>React World</h3>
    </div>
  );
};
