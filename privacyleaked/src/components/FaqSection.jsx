import { useId, useState } from "react";
import { Minus, Plus } from 'lucide-react';

const faqItems = [
  {
    id: "faq-anonymous",
    question: "Is this actually 100% anonymous?",
    answer:
      "Yes. We don't track your IP address, ask for a login, or keep hidden logs. Once you hit submit, the text is sent to us with zero connection to your device or identity.",
  },
  {
    id: "faq-share-story",
    question: "What happens after I share my story?",
    answer:
      "After submission, your story is reviewed for safety and formatting before it is published or used in the intended flow. We do not attach it to your identity.",
  },
  {
    id: "faq-real-details",
    question: "What if I accidentally include real names or details?",
    answer:
      "If you include identifying details, they can be removed or edited during review to better protect privacy before anything is shared further.",
  },
  {
    id: "faq-why-read",
    question: "Why do we need to read these leaked stories?",
    answer:
      "These stories help surface patterns, expose harmful behavior, and create awareness through firsthand experiences that might otherwise remain hidden.",
  },
];

export const FaqSection = () => {
  const [openItemId, setOpenItemId] = useState(faqItems[0].id);
  const sectionTitleId = useId();

  const toggleItem = (itemId) => {
    setOpenItemId((currentItemId) => (currentItemId === itemId ? null : itemId));
  };

  const handleItemKeyDown = (event, itemId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(itemId);
    }
  };

  return (
    <section
      aria-labelledby={sectionTitleId}
      className="flex flex-col items-start gap-2.5 pt-[150px] pb-[100px] px-[100px] relative bg-variable-collection-deep-green"
    >
      <div className="flex flex-col items-center gap-[74px] relative self-stretch w-full flex-[0_0_auto]">
        <h2
          id={sectionTitleId}
          className="relative self-stretch -mt-[1.00px] font-['Archivo',Helvetica] font-semibold text-variable-collection-white text-7xl text-center tracking-[0] leading-[normal]"
        >
          FAQs
        </h2>
        <div className="flex-col w-[1283px] gap-5 flex items-center relative flex-[0_0_auto]">
          {faqItems.map((item, index) => {
            const isOpen = openItemId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;
            const previousItem = faqItems[index - 1];
            const nextItem = faqItems[index + 1];
            const showTopDivider =
              !isOpen && previousItem && openItemId !== previousItem.id;
            const showBottomDivider =
              !isOpen && nextItem && openItemId !== nextItem.id;

            return (
              <div
                key={item.id}
                className="relative self-stretch w-full flex-[0_0_auto]"
              >
                {isOpen ? (
                  <div
                    role="button"
                    tabIndex={0}
                    id={buttonId}
                    aria-expanded="true"
                    aria-controls={panelId}
                    aria-label={`Collapse FAQ: ${item.question}`}
                    onClick={() => toggleItem(item.id)}
                    onKeyDown={(event) => handleItemKeyDown(event, item.id)}
                    className="flex flex-col h-[165px] items-start gap-2.5 p-10 relative self-stretch w-full bg-variable-collection-lemon-light rounded-3xl overflow-hidden backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    <div className="items-center justify-between flex-1 self-stretch w-full grow flex relative">
                      <div className="flex-col w-[915px] items-start gap-2 flex relative">
                        <h3 className="relative self-stretch mt-[-1.00px] font-['Archivo',Helvetica] font-bold text-variable-collection-black text-2xl -tracking-[0.48px] leading-[31.2px]">
                          {item.question}
                        </h3>
                        <p
                          id={panelId}
                          aria-labelledby={buttonId}
                          className="relative self-stretch font-['Host Grotesk',Helvetica] font-normal text-[#00000099] text-lg tracking-[-0.36px] leading-[23.4px]"
                        >
                          {item.answer}
                        </p>
                      </div>
                      <span className="flex w-12 h-12 items-center justify-center gap-2.5 p-3 relative rounded-3xl border border-solid border-[#0000001a]" aria-hidden="true">
                        <Minus className="!relative !w-6 !h-6" />
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    {showTopDivider ? (
                      <div
                        aria-hidden="true"
                        className="h-px w-full shrink-0 self-stretch bg-white/10"
                      ></div>
                    ) : null}
                    <div
                      role="button"
                      tabIndex={0}
                      id={buttonId}
                      aria-expanded="false"
                      aria-controls={panelId}
                      aria-label={`Expand FAQ: ${item.question}`}
                      onClick={() => toggleItem(item.id)}
                      onKeyDown={(event) => handleItemKeyDown(event, item.id)}
                      className="justify-around gap-[727px] px-10 py-[31px] self-stretch w-full flex items-center relative flex-[0_0_auto] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    >
                      <div className="items-center justify-between flex-1 self-stretch grow flex relative">
                        <h3 className="relative flex-1 font-['Archivo',Helvetica] font-bold text-variable-collection-white text-2xl tracking-[-0.48px] leading-[31.2px]">
                          {item.question}
                        </h3>
                        <span className="w-12 h-12 items-center justify-center gap-2.5 p-3 rounded-3xl border border-solid border-[#ffffff1a] flex relative" aria-hidden="true">
                          <Plus className="!relative !w-6 !h-6  text-variable-collection-white" />
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;