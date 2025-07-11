import Image from "next/image";
import FamLogo from "/public/besteiei.png";
import FamilyPic from "/public/familypic.jpg";
import SendLove from "/public/sendlove.gif";
import SkiFam from "/public/skiwithfam.jpg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row lg:flex-row bg-white">
      <section className="bg-warm-pink p-4  w-full md:w-1/2 items-center justify-center lg:flex xl:w-2/5 md:m-2 lg:m-4 md:rounded-3xl lg:rounded-3xl">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-10">
          <Image
            src={FamLogo}
            alt="Logo"
            width={250}
            height={250}
            className="h-auto"
          />
          <div className="space-y-5 text-white">
            <h1 className="text-3xl font-bold font-popping">From your Best</h1>
            <p>แด่คนที่หนูรักที่สุดในโลก</p>
            <p>แด่คนที่รักหนูที่สุดในโลก</p>
            <p>แด่คนที่คอยดูแลและเป็นห่วงหนูเสมอ</p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="rounded-full bg-white px-6 py-2 font-semibold text-warm-pink transition-all hover:bg-[#3DD9B3] hover:text-white active:bg-[#3DD9B3] active:text-white">
                  more
                </button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>To my dear family</DialogTitle>
                  <DialogDescription>
                    Love you to the moon and back...
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                  <div className="grid max-h-[70vh] overflow-y-scroll flex-1 gap-y-4">
                  <p className="indent-8">อันนี้เป็นโปรเจคเล็กๆที่หนูอยากทำขึ้นด้วยความตั้งใจของตัวเอง ให้ตัวเอง ให้ครอบครัว คุณพ่อ,คุณแม่และพี่ธาม เป็นเหมือนการเก็บบันทึกไว้เป็นเมมโมรี่เล็กน้อยน่ารักๆค่ะ เพราะหนูขี้ลืมด้วย การได้ค้นหาและมองดูรูปเหล่านี้ก็เหมือนได้เรียบเรียงเรื่องราวนั่งไทม์แมชชีนไปย้อนดูตัวเองและครอบครัวเรา หนูอยากเก็บความทรงจำเอาไว้เหมือนเวลาคนถ่ายภาพแล้วล้างฟิลม์ออกมา แต่ก็อยากให้มันแตกต่างออกไปและให้สะดวกกับทุกคนเข้าถึงได้ง่าย และก็อวดความสามารถตัวเองไม่ให้สนิมเกาะด้วยค่ะ 555 หวังว่าสิ่งนี้จะสร้างความสุขให้พ่อแม่พี่ธามเอนจอยได้ไม่มากก็น้อยนะคะ</p>
                  <p className="indent-8">เนื่องในโอกาสอายุจะขึ้นเลข24แล้วด้วย อันนี้ก็เหมือนเป็นโปรเจคฉลองการทำงานครั้งแรก หนูอยากแสดงการเติบโต ว่านกที่พ่อกับแม่คอยดูแลวันนั้น จะกางปีกโพบินในแบบของตัวเองให้ได้ ขอบคุณที่เลี้ยงดูหนูมาอย่างดี ขอขมาถ้าทำอะไรไม่ดีหรือดื้อไปนะคะ หนูอยากเติบโตให้มากขึ้นและเป็นที่พึ่งของทุกคนได้</p>
                  <p className="indent-8">ไม่ต้องน้อยใจนะคะ ถ้ารูปไหนไม่สวยหรือรูปใครน้อยกว่า หนูเอาจากที่หามาได้และเซฟไว้ บางทีอาจจะหาได้ไม่ครบหรือตกหล่นไปบ้าง ถ้ามีอะไรผิดพลาดตรงไหน ขอโทษด้วยนะคะ</p>
                  </div>
                </div>
                <DialogFooter className="sm:justify-end">
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex justify-center">
            <Image
              src={FamilyPic}
              alt=""
              width={342}
              height={342}
              className="transition-all hover:rotate-2 hover:scale-105 active:rotate-2 active:scale-105"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 justify-center lg:p-8 lg:py-0">
        <div className="flex justify-center relative m-8 w-[342px] h-[342px]">
          <Image
            src={SendLove}
            alt=""
            width={350}
            height={350}
            className="transition-all drop-shadow-lg hover:drop-shadow-none"
          />
          <Image
            src={SkiFam}
            alt=""
            width={342}
            height={342}
            className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all duration-300 active:opacity-100"
          />
        </div>
        <Link href="/home">
          <button className="rounded-full bg-bright-blue px-10 py-4 font-semibold text-white transition-all hover:bg-white hover:text-bright-blue hover:border hover:border-bright-blue active:bg-white active:text-bright-blue active:border active:border-bright-blue">
            Let&apos;s Go!
          </button>
        </Link>
      </section>
    </div>
  );
}
