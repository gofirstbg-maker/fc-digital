"use client";
import { _Accordion, Button, FooterLinkList, Icon, SectionHeading, TextSwiper } from "@/components";
import { SmallTextCard } from "@/collections/Cards/SmallTextCard";
import {
  ContactForm,
  LargeTextCard,
  MediumTextCard,
  SocialsCard,
  SubscriptionForm
} from "@/collections";
import { ProjectsCard } from "@/collections/Cards/ProjectsCard";
import { UsedTechnologiesCard } from "@/collections/Cards/UsedTechnologiesCard";
import { TeamMembersCard } from "@/collections/Cards/TeamMembersCard";
import { TestimonialsCard } from "@/collections/Cards/TestimonialsCard";
import { SubmitHandler } from "react-hook-form";
import { ContactFormValue } from "@/schemas";
import { SubscriptionFormValue } from "@/schemas/subscription-form-schema";
import { ServiceImagesCard } from "@/collections/Cards/ServiceImagesCard";
import { TeamMemberCard } from "@/collections/Cards/TeamMemberCard";

export default function DesignSystem() {
  const submitHandler: SubmitHandler<ContactFormValue> = async data => {
    console.log(data);
  };

  const subSubmitHandler: SubmitHandler<SubscriptionFormValue> = async data => {
    console.log(data);
  };

  return (
    <main>
      <div className='flex flex-col gap-5 p-5'>
        <Button className='uppercase'>Home</Button>
        <div className='w-full max-w-80'>
          <Button className='bg-primary text-dark-06' size={"lg"}>
            Big Button
          </Button>
        </div>
        {/* {BUTTON WITH DECORATION} */}
        <Button variant={"ghost"} className='!Body-20 w-fit uppercase text-primary'>
          <span className='relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-primary '>
            <Icon name='ArrowRight' className='h-5 w-5 text-secondary' />
            <span className='polygon-clipPath absolute h-[84px] w-[84px] rounded-full border-4 border-primary'></span>
          </span>
          Start Project
        </Button>
        {/* {BUTTON WITH DECORATION} */}
        <SectionHeading title='Reasons to Choose NexGen for Your Digital Journey' />
        <SectionHeading
          title='Reasons to Choose NexGen for Your Digital Journey'
          linkBtn={{
            icon: "ArrowTopRight",
            link: { href: "/" },
            label: "Label",
            variant: "ghost",
            size: "fit"
          }}
        />
        <div className='flex w-[480px] flex-row gap-4 '>
          <SmallTextCard value='200+' label='clients' />
          <SmallTextCard
            linkBtn={{
              label: "KNOW MORE",
              link: { href: "/" },
              icon: "ArrowRight",
              size: "dark-md",
              variant: "filledDark",
              className: "Body-14"
            }}
          />
        </div>
        <div className='w-full max-w-[430px]'>
          <MediumTextCard
            description='NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.'
            title='Expertise in Cutting-Edge Technologies'
            linkBtn={{ label: "Learn More", link: { href: "/" } }}
          />
        </div>
        <div className='w-full  max-w-[880px]'>
          <LargeTextCard
            icon='ArrowRight'
            title='web design'
            linkBtn={{
              link: { href: "/" },
              label: "Book a call",
              variant: "filledLight",
              size: "light-md",
              icon: "ArrowTopRight"
            }}
            description='Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.'
            price='Start from $1.500'
          />
        </div>
        <div className='w-full max-w-[580px]'>
          <ProjectsCard
            linkBtn={{
              link: { href: "/" },
              icon: "ArrowRight",
              label: "Details",
              size: "light-md",
              variant: "filledLight"
            }}
            description='An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.'
            icon='ArrowTopRight'
            title='Zenith Fitness App'
            badges={[
              { label: "Category", value: "Mobile App Development" },
              { label: "Time Taken", value: "6 months" }
            ]}
          />
        </div>
        <div className='w-full max-w-[580px]'>
          <UsedTechnologiesCard
            title='Technologies Used'
            badges={[
              "WordPress",
              "PHP",
              "HTML5",
              "CSS3",
              "JavaScript",
              "PHP",
              "HTML5",
              "CSS3",
              "JavaScript"
            ]}
          />
        </div>
        <div className='w-full max-w-[580px]'>
          <TeamMembersCard
            title='team members'
            members={[
              { src: "/team-img-1.png", alt: "member-1", height: 50 },
              { src: "/team-img-2.png", alt: "member-2", height: 50 },
              { src: "/team-img-3.png", alt: "member-3", height: 50 },
              { src: "/team-img-4.png", alt: "member-4", height: 50 },
              { src: "/team-img-5.png", alt: "member-5", height: 50 }
            ]}
          />
        </div>

        <div className='w-full max-w-[430px]'>
          <TestimonialsCard
            description='Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!'
            link={{ href: "/" }}
            title='NexGen turned our business around!'
            customerImg={{ src: "/team-img-4.png", alt: "member-2", height: 50 }}
            customerJobTitle='CEO of BlueBloom'
            customerName='Sarah Thompson'
          />
        </div>
        <div className='w-full max-w-[1054px]'>
          <_Accordion
            items={[
              {
                content:
                  "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
                trigger: "How long does it take to complete a web development project?"
              },
              {
                content:
                  "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
                trigger: "How long does it take to complete a web development project?"
              }
            ]}
          />
        </div>
        <div className='w-full max-w-[745px]'>
          <ContactForm
            submitFunction={submitHandler}
            defaultValues={{ email: "", message: "", name: "" }}
            title='Ask your question'
            submitButtonLabel='Send your message'
            emailInputCaption={{ label: "email", placeholder: "Enter your email" }}
            nameInputCaption={{ label: "name", placeholder: "Enter your name" }}
            textareaInputCaption={{
              label: "your question",
              placeholder: "Enter your Question here"
            }}
          />
        </div>
        <div className='w-full max-w-[745px]'>
          <TextSwiper items={["test", "test", "test", "test", "test", "test", "test", "test"]} />
        </div>
        <div className='w-full max-w-[352px]'>
          <SocialsCard
            description='Share visually appealing snippets of our projects.'
            title='Instagram'
            icon='ArrowRight'
            linkBtn={{ link: { href: "/" } }}
          />
        </div>
        <div className='w-full max-w-[140px]'>
          <FooterLinkList
            title='Home'
            linkItems={[
              { label: "Why Us", link: { href: "/" } },
              { label: "Why Us", link: { href: "/" } },
              { label: "Why Us", link: { href: "/" } },
              { label: "Why Us", link: { href: "/" } }
            ]}
          />
        </div>
        <div className='w-full max-w-[320px]'>
          <SubscriptionForm
            submitFunction={subSubmitHandler}
            emailInputCaptions={{ label: "", placeholder: "Enter your email" }}
          />
        </div>
        <div className='w-full max-w-[665px]'>
          <ServiceImagesCard
            title='Web Design Projects'
            linkBtn={{ label: "View All", link: { href: "/" } }}
            images={[
              {
                image: { src: "/web-design-img-1.png", alt: "random", width: 297, height: 220 },
                linkBtn: { label: "Open project", link: { href: "/" } }
              },
              {
                image: { src: "/web-design-img-2.png", alt: "random", width: 297, height: 220 },
                linkBtn: { label: "Open project", link: { href: "/" } }
              }
            ]}
          />
        </div>
        <div className='w-full max-w-[327px]'>
          <TeamMemberCard
            name='John Smith'
            job='Co-Founder & CEO'
            image={{ src: "/team-img-1.png", alt: "John Smith", width: 370, height: 211 }}
            socials={[
              { icon: "Facebook", link: { href: "/" } },
              { icon: "Twitter", link: { href: "/" } },
              { icon: "LinkedIn", link: { href: "/" } }
            ]}
          />
        </div>
      </div>
    </main>
  );
}
