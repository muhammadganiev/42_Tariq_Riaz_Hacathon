"use client";
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Spline from "@splinetool/react-spline";
import Logo from "@/components/icons/Logo";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";
import TR_logo_white from "../public/TR_white.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AuroraBackgroundDemo } from '@/components/ui/backgrounds/aurora-background';
import { ThreeDCard } from '@/components/ui/cards/threed-card';
import AGTA from "../public/2021_AGTA.png";
import { IpadScroll } from '@/components/ui/ipad-scroll';
import ItemOne from "@/public/item1.png"
import ItemTwo from "@/public/item2.png"
import { HideCard } from '@/components/ui/cards/hide-card';
import { TextReveal } from '@/components/ui/cards/text-reveal';
import { SparklesLight } from '@/components/ui/backgrounds/sparkles-light';
import { SpeedWord } from '@/components/ui/backgrounds/speed-word';
import Countdown from '@/components/ui/Countdown';
import CustomCountdown from '@/components/ui/countdown/custom-countdonw';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { FalingBeams } from '@/components/ui/backgrounds/FalingBeams';
import ItemCountdown from '@/components/ui/countdown/item-countdown';
import { Button } from '@/components/ui/button';
import FloatingItemCountdown from '@/components/ui/countdown/floating-item-countdown';
import QR from "@/public/qr.png"
import { Link } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

const words = ["Better", "Innovative", "Beautiful", "Modern"];


export default function Home() {
  const [itemCount, setItemCount] = useState(25);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (itemCount > 0) {
        setShake(true);
        setTimeout(() => setShake(false), 500); // Remove shake after animation
        setItemCount((prevCount) => prevCount - 1);
      }
    }, 20000); // Decrease every minute

    return () => clearInterval(timer);
  }, [itemCount]);

  const cube = useRef<any>(null);
  const ring = useRef<any>(null);
  const dude = useRef<any>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  function onLoad(spline: any) {
    const obj = spline.findObjectById('9708f0ce-7da8-47e3-951e-df6658e856a9');
    const spiderman = spline.findObjectById('C0DE995C-2EAB-4401-AC31-0EAB4B13910F');
    const small_ring = spline.findObjectById('ba07b957-f178-4b5d-bbbe-c317f1c6b632');

    dude.current = spiderman;
    cube.current = obj;
    ring.current = small_ring;

    if (ring.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#part1",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        }
      })
      .to(ring.current.position, {
        y: 0,
        x: 300,
      },0)
      .to(ring.current.scale, {
        x: 10,
        y: 10,
        z: 10,
      },0)
      .to(ring.current.rotation, {
        z: Math.PI * 1,
        x: Math.PI * -1.2,
        y: Math.PI * -1,
      }, 0);
      gsap.timeline({
        scrollTrigger: {
          trigger: "#part2",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        }
      })
      .to(ring.current.rotation, {
        z: Math.PI * 0.5,
        x: Math.PI * -1.2,
        y: Math.PI * 1,
      },0)
      .to(ring.current.position, {
        y: -20,
        x: -300,
      },0)
      .to(ring.current.scale, {
        x: 8,
        y: 8,
        z: 8,
      }, 0);
      gsap.timeline({
        scrollTrigger: {
          trigger: "#part3",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        }
      })
      .to(ring.current.rotation, {
        z: Math.PI * 1,
        x: Math.PI * -1.2,
        y: Math.PI * -1,
      },0)
      .to(ring.current.position, {
        y: -20,
        x: 0,
      },0)
      .to(ring.current.scale, {
        x: 12,
        y: 12,
        z: 12,
      }, 0)
      gsap.timeline({
        scrollTrigger: {
          trigger: "#part4",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        }
      })
      .to(ring.current.rotation, {
        z: Math.PI * 1,
        x: Math.PI * -1,
        y: Math.PI * -0.5,
      },0)
      .to(ring.current.position, {
        y: 600,
        x: 600,
      },0)
      .to(ring.current.scale, {
        x: 5,
        y: 5,
        z: 5,
      }, 0)
      
    }
    
    

    if (dude.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#part1",
          start: "top bottom",
          end: "center bottom",
          scrub: true,
        }
      })
      .to(dude.current.position, {
        y: 800,
      });
    }

    if (cube.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#part1",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        }
      })
      .to(cube.current.position, {
        y: 1200,
      });
    }
  }

  useEffect(() => {
  const updatePointerEvents = () => {
    const part0Element = document.getElementById("part0");
    console.log(part0Element)
    if (part0Element) {
      splineRef.current?.classList.add("pointer-events-none");
    } else {
      splineRef.current?.classList.remove("pointer-events-none");
    }
  };

  window.addEventListener('scroll', updatePointerEvents);
  return () => {
    window.removeEventListener('scroll', updatePointerEvents);
  };
}, []);

  return (
    <main>
      <div id="part0" className="w-screen h-screen bg-black">
        <div className="flex flex-row gap-5 items-center text-6xl font-extrabold text-white/90 dark:text-neutral-400 absolute left-10 inset-y-0 z-20 pointer-events-none">
          <div>
            <Logo Logo_src={TR_logo_white} width={100} height={100} />
          </div>
          <div>
            <FlipWords words={words} /> <br />
            Tariq Riaz
          </div>
        </div>
         
        <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
          <BackgroundBeams />
        </div>
      </div>
      <Spline
          ref={splineRef}
          className="fixed top-0 left-0 right-0 bottom-0 z-10"
          scene="https://draft.spline.design/u9bhzi3OVBWTaPFW/scene.splinecode"
          onLoad={onLoad}
        />
      <div id="part1" className="w-screen h-fit bg-zinc-50 -z-10">
        <AuroraBackgroundDemo showContent></AuroraBackgroundDemo>
      </div>
      <div id="part2" className="w-screen h-auto bg-zinc-50 z-30">
        <IpadScroll></IpadScroll> 
      </div>
      <div id="part3" className='bg-zinc-50 w-screen h-[100rem]'>
        
        <SparklesLight></SparklesLight>
      </div>
      <FloatingItemCountdown itemCount={itemCount} shake={shake} />
      <div id="part4" className="relative w-screen min-h-screen bg-zinc-50">
      <div className="absolute inset-0 z-0">
        <AuroraBackgroundDemo showContent={false} />
      </div>
      <SpeedWord></SpeedWord>
      <div className="flex flex-wrap justify-evenly">
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <HideCard Logo_src={ItemOne} title='Eclipse Spiral' description='The Eclipse Spiral is a perfect blend of elegance and boldness, making it a standout piece for any occasion.'></HideCard>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <HideCard Logo_src={ItemTwo} title='Eclipse Spiral' description='The Eclipse Spiral is a perfect blend of elegance and boldness, making it a standout piece for any occasion.'></HideCard>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <HideCard Logo_src={ItemOne} title='Eclipse Spiral' description='The Eclipse Spiral is a perfect blend of elegance and boldness, making it a standout piece for any occasion.'></HideCard>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <HideCard Logo_src={ItemTwo} title='Eclipse Spiral' description='The Eclipse Spiral is a perfect blend of elegance and boldness, making it a standout piece for any occasion.'></HideCard>
        </div>
      </div>
    </div>

    <div id="part5" className="relative flex flex-col items-center w-screen h-screen gap-10 bg-zinc-50 sm:p-8">
      <div className="absolute inset-0 z-0">
        <FalingBeams></FalingBeams>
      </div>
      
      <div className=" h-fit w-fit-0 flex-row content-center z-10">
      <div className='pb-10 pt-32'>
      <ItemCountdown itemCount={itemCount} shake={shake} />
      </div>
        
        <CustomCountdown targetDate={new Date('2024-10-31T23:59:59')} />
      </div>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-neutral-800 dark:text-white font-sans tracking-tight">
          Don't miss it{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className=""> | Order now!</span>
          </div>
          </div>
      </h2>
      <Button variant={'outline'} className="border-main_color text-main_color hover:bg-main_color hover:text-white rounded-full text-2xl font-light z-20"> Shop now </Button>
    </div>
    <div id='part6' className='w-screen h-screen gap-10 flex flex-col pt-40 items-center bg-black'>
      <div className=''>
        <Logo Logo_src={QR} width={400} height={400}></Logo>
      </div>
      <Button variant={'outline'} className='text-white border border-white hover:bg-white hover:text-black text-2xl'> 
        <Link className='pr-2'>
        
        </Link>
         Ready to try? 
        </Button>
       
    </div>
    </main>
  );
}
