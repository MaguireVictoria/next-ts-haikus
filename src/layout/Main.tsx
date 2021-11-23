import React from "react";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <main>
			<h1 className="H1">Haikus</h1>
	     {children}
    </main>
  );
};

export default Main;