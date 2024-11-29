import React from "react";
import "./styles.css";

type AccordionItemProps = {
  title: string;
  content: string;
  isOpen?: boolean;
  onToggle?: () => void;
};

export function AccordionItem({
  title,
  content,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="accordion-item">
      <div onClick={onToggle} className="title">
        {title}
      </div>
      {isOpen && (
        <div className={`content-${isOpen ? "open" : "closed"}`}>{content}</div>
      )}
    </div>
  );
}

type AccordionProps = {
  children: React.ReactNode;
};

export function Accordion({ children }: AccordionProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const items = React.Children.toArray(children).map((child, index) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    return React.cloneElement(child as React.ReactElement, {
      isOpen: activeIndex === index,
      onToggle: () => setActiveIndex(activeIndex === index ? null : index),
    });
  });
  console.log("gera", items);
  return <div className="accordion">{items}</div>;
}

AccordionItem.Item = AccordionItem;
