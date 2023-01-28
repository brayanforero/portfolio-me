function End() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center py-32 text-xl">
      <p>Brayan Forero {year}</p>
    </footer>
  );
}

export default End;
