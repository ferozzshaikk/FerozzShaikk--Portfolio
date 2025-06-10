import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row-reverse text-primary animate-float">
        <a href="#hero">
          <ArrowUp />
        </a>
      </div>
      <div className="py-10 px-4 bg-card relative border-t border-border mt-1 pt-8">
        <p>
          &copy; {new Date().getFullYear()} FerozzShaikk. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
