import { useEffect, useState, useRef } from "react";

interface SidebarNavigationProps {
  sections: { id: string; title: string }[];
  parentId: string; // Allows dynamic container selection
}

export default function SidebarNavigation({ sections, parentId }: SidebarNavigationProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const parentRef = useRef<HTMLElement | null>(null);

  const [isSticky, setIsSticky] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [sidebarTop, setSidebarTop] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [parentTop, setParentTop] = useState(0);
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const footer = document.getElementById("footer");
    const parent = document.getElementById(parentId);

    footerRef.current = footer;
    parentRef.current = parent;

    if (sidebarRef.current && navbar && footer && parent) {
      const sidebarTopPosition = sidebarRef.current.getBoundingClientRect().top + window.scrollY;
      setSidebarTop(sidebarTopPosition);
      setNavbarHeight(navbar.offsetHeight);
      setParentHeight(parent.offsetHeight);
      setParentTop(parent.offsetTop);
      setSidebarHeight(sidebarRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (!sidebarRef.current || !footerRef.current || !parentRef.current) return;

      const scrollY = window.scrollY;
      const sidebarHeight = sidebarRef.current.offsetHeight;
      const parentTop = parentRef.current.offsetTop;
      const parentHeight = parentRef.current.offsetHeight;
      const parentBottom = parentTop + parentHeight;
      const footerTop = footerRef.current.offsetTop;

      const navbar = document.getElementById("navbar");
      if (!navbar) return;
      const navbarHeight = navbar.offsetHeight;

      const sidebarBottomPosition = scrollY + navbarHeight + sidebarHeight;

      if (scrollY > parentTop - 36) {
        if (sidebarBottomPosition < footerTop - navbarHeight) {
          setIsSticky(true);
          setIsAtBottom(false);
        } else {
          setIsSticky(false);
          setIsAtBottom(true);
        }
      } else {
        setIsSticky(false);
        setIsAtBottom(false);
      }
    };

    window.addEventListener("resize", () => {
      setTimeout(() => {
        if (sidebarRef.current) {
          setSidebarTop(sidebarRef.current.getBoundingClientRect().top + window.scrollY);
          setSidebarHeight(sidebarRef.current.offsetHeight);
        }
      }, 100);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", () => {});
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sidebarTop, navbarHeight]);

  return (
    <div
      ref={sidebarRef}
      className={`w-[250px] bg-gray-100 p-4 rounded-lg shadow-md ${
        isAtBottom
          ? "absolute"
          : isSticky
          ? "fixed top-[80px]"
          : "relative"
      }`}
      style={isAtBottom ? { top: `${parentHeight + parentTop - sidebarHeight - navbarHeight}px` } : {}}
    >
      <div>
        <h3 className="text-lg font-bold mb-4">Navigation</h3>
        <ul className="space-y-2">
          {sections.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  const target = document.getElementById(item.id);
                  if (target) {
                    const navbar = document.getElementById("navbar");
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 10;

                    window.scrollTo({ top: targetPosition, behavior: "smooth" });
                  }
                }}
                className="w-full text-left p-2 rounded-md hover:bg-gray-300 transition"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
