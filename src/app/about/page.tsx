import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col space-y-6">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/images/headshot.jpg"
              alt="Artist Photo"
              className="rounded-full w-64 h-64 object-cover shadow-lg"
              width={256}
              height={256}
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-xl leading-relaxed">
              Hello! My name is <span className="font-semibold">Eric</span>, and
              I am a passionate artist specializing in{" "}
              <span className="font-semibold">[Medium or Style]</span>. With
              over <span className="font-semibold">[Number]</span> years of
              experience, I have developed a unique style that blends{" "}
              <span className="font-semibold">[Inspiration or Technique]</span>{" "}
              with <span className="font-semibold">[Other Influences]</span>.
            </p>
            <p className="text-xl leading-relaxed mt-4">
              My work has been showcased in numerous exhibitions, including{" "}
              <span className="font-semibold">[Exhibition Name]</span> and{" "}
              <span className="font-semibold">[Exhibition Name]</span>. I am
              deeply inspired by{" "}
              <span className="font-semibold">[Inspiration Source]</span>
              and strive to evoke{" "}
              <span className="font-semibold">[Emotion or Theme]</span> through
              my creations. Each piece is crafted with meticulous attention to
              detail, aiming to tell a story and connect with the audience on a
              personal level.
            </p>
            <p className="text-xl leading-relaxed mt-4">
              In addition to my artistic practice, I also teach workshops and
              offer private lessons to aspiring artists. Sharing my knowledge
              and helping others discover their creative potential is something
              I find incredibly rewarding.
            </p>
            <p className="text-xl leading-relaxed mt-4">
              Feel free to browse through my portfolio and get in touch if you
              would like to learn more about my work or discuss potential
              collaborations.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
