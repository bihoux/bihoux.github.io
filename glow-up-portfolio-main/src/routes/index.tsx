import { createFileRoute } from "@tanstack/react-router";
import { Hero, About, Skills } from "@/components/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hoby Randriatsarafara — AI Researcher & Full-Stack Engineer" },
      { name: "description", content: "PhD researcher in Computer Vision. YOLOv8, real-time mobile AI, and full-stack Java engineering." },
      { property: "og:title", content: "Hoby Randriatsarafara — AI Researcher & Full-Stack Engineer" },
      { property: "og:description", content: "PhD researcher in Computer Vision. YOLOv8, real-time mobile AI, and full-stack Java engineering." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  );
}
