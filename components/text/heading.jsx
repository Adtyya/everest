function HeadingOne({ children, className }) {
  return (
    <h1 className={`text-5xl font-semibold lg:text-6xl ${className}`}>
      {children}
    </h1>
  );
}

function HeadingTwo({ children, className }) {
  return (
    <h1 className={`text-3xl font-semibold lg:text-4xl ${className}`}>
      {children}
    </h1>
  );
}

export { HeadingOne, HeadingTwo };
