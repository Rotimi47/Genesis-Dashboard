export const Dashboard = () => {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-5xl font-extrabold">
        This should be you
      </h1>

      <p className="mt-4 text-(--text-main-02)">
        Testing the theme.
      </p>

      <div className="mt-8 rounded-xl bg-(--surface-level-03) p-8">
        This is a themed surface.
      </div>
    </div>
  );
};