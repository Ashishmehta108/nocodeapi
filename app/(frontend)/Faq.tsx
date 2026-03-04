// components/FaqSection.tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";

export const FaqSection = () => {
  return (
    <section className="py-20 px-10 container  mx-auto   ">
      <h2 className="md:text-3xl text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" className="" collapsible>
        <AccordionItem value="question1">
          <AccordionTrigger>
            How do I create an API with the drag-and-drop feature?
          </AccordionTrigger>
          <AccordionContent>
            Using our drag-and-drop interface, you can build your API by simply
            dragging elements from the toolbox and dropping them into the
            canvas. The Canvas API then generates the necessary code behind the
            scenes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question2">
          <AccordionTrigger>
            What platforms and data sources can I connect to?
          </AccordionTrigger>
          <AccordionContent>
            Our platform supports connections to popular databases, RESTful
            APIs, and other third-party services, allowing you to seamlessly
            integrate with a variety of data sources.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question3">
          <AccordionTrigger>
            Do I need to know Node.js to use this platform?
          </AccordionTrigger>
          <AccordionContent>
            Basic coding knowledge is required. Our platform allows you to
            create and deploy APIs in Node.js without writing any code. The
            drag-and-drop interface does all the heavy lifting for you.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question4">
          <AccordionTrigger>
            How does the Canvas API work in this platform?
          </AccordionTrigger>
          <AccordionContent>
            The Canvas API enables you to visually design API flows by
            connecting components. Each component corresponds to backend
            functionalities, which the system compiles into a Node.js API.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaqSection;
