import "./styles.css";
import {Accordion, AccordionItem} from "./Accordion";

export default function App() {
const items = [
 {
   id: 1,
   title: "Section 1",
   content: "I'm the content of section 1"
 },
 {
   id: 2, 
   title: "Section 2",
   content: "I'm the content of section 2"
 },
 {
   
   id: 3,
   title: "Section 3",
   content: "I'm the content of section 3"  }  

]

  return (
    <div className="App">
      <Accordion>
{items.map((item) => (
  <AccordionItem key={item.id} title={item.title} content={item.content} />))}
      </Accordion>

    </div>
  );
}
