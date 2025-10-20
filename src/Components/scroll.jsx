import { useState, useEffect } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  // scroll event check
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // smooth animation
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition z-50"
          title="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollButton;
