import Image, { StaticImageData } from 'next/image';

interface LogoProps {
  Logo_src: string | StaticImageData; // Accept both string and StaticImageData types
  width?: number; // Optional width
  height?: number; // Optional height
}

export default function Logo({ Logo_src, width = 60, height = 60 }: LogoProps) {
  return (
    <Image
      priority
      src={Logo_src}
      width={width}
      height={height}
      alt="Logo"
    />
  );
}
