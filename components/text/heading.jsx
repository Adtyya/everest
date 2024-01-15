function HeadingOne({ children, className }) {
  return (
    <h1 className={`text-5xl font-semibold lg:text-6xl ${className}`}>
      {children}
    </h1>
  );
}

function HeadingTwo({ children, className }) {
  return (
    <h1 className={`text-4xl font-semibold lg:text-5xl ${className}`}>
      {children}
    </h1>
  );
}

export { HeadingOne, HeadingTwo };
