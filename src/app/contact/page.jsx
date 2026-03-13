import Link from "next/link";
import Contact from "@/components/Contact";
export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">
        Have questions or need assistance? Feel free to reach out to us!
      </p>
      
      <Contact />
    </div>
  );
}
