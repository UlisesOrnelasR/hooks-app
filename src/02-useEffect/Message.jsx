import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Messaeg mounted");

    return () => {
      console.log("Messaeg Unmounted");
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
