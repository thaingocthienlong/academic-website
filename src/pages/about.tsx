import PageHeader from "@/components/PageHeader";
import AboutContent from "@/components/AboutContent";

export default function AboutPage() {
  return (
    <main>
      <PageHeader 
        title="ABOUT US" 
        breadcrumb="ABOUT US" 
        backgroundImage="https://placehold.co/1520x300" 
      />
      <AboutContent />
    </main>
  );
}
