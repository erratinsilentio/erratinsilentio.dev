export const Layout = () => {
  return (
    <div className="grid grid-rows-[0px_1fr_20px] items-center justify-items-center max-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-3 row-start-2 items-center sm:items-center">
        <slot />
      </main>
    </div>
  );
};