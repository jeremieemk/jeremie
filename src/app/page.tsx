import {
  EnvelopeIcon,
  PencilIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./components/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container">
      <p>
        Bonjour 👋, I&apos;m{" "}
        <span className="border-b-black border-b-2 link name relative">
          Jérémie.
          <Image
            src="/avatar.png"
            alt="img/avatar"
            className="avatar"
            width={259}
            height={365}
          />
        </span>
      </p>
      <p>
        I turn ideas into code at{" "}
        <a href="https://www.radioking.com/" target="_blank">
          <span className="link hover:text-[#d754ae]">RadioKing</span>
        </a>
        , sounds into songs as{" "}
        <a href="https://izem.me/" target="_blank">
          {" "}
          <span className="link hover:text-[#5e9450]">iZem</span>
        </a>
        , and cultural chaos into collaborations at{" "}
        <a href="https://www.elis-records.com/" target="_blank">
          <span className="link hover:text-[#006fc5]">Elis Records</span>.
        </a>
      </p>
      <p>I geek out on all things Ableton, Javascript and Caetano Veloso.</p>
      <p>
        Originally from France, I managed to live in 6 countries and 15 cities
        without losing my headphones.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <a href="https://izem.me/" target="_blank">
          <Button>
            <PencilIcon className="size-6 mr-2" />
            Blog
          </Button>
        </a>
        <a
          href="https://open.spotify.com/playlist/4FX7cXqldv8Si32sjK5PQP?si=3bb140fdc4674b1f"
          target="_blank"
        >
          <Button>
            <SpeakerWaveIcon className="size-6 mr-2" />
            Music
          </Button>
        </a>
        <a href="mailto:jeremieemk@gmail.com">
          <Button>
            <EnvelopeIcon className="size-6 mr-2" />
            Get in touch
          </Button>
        </a>
      </div>
    </div>
  );
}
