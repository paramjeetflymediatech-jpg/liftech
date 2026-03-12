export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <h1 className="font-bold text-xl">Liftech Exports</h1>

        <nav className="flex gap-6">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}