import Image from "next/image";
import { useRouter } from "next/router";

export default function Introduction() {
  const router = useRouter();

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="https://placehold.co/600x400" // Replace with your actual image path
            alt="Study Group"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-gray-900">About Study</h2>
          <p className="mt-4 text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable.
          </p>
          <p className="mt-2 text-gray-600">
            If you are going to use a passage of Lorem Ipsum, you need to be sure
            there isn't anything embarrassing hidden in the middle of text.
          </p>
          <button
            onClick={() => router.push("/about")}
            className="mt-6 px-6 py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            LEARN NOW
          </button>
        </div>
      </div>
    </section>
  );
}
