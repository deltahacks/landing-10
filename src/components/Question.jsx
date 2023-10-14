import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Question({ question, answer }) {
  return (
    <div className="w-full ">
      <Disclosure as="div" className="border-b-[1px] border-gray-400 pb-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className="flex w-full justify-between rounded-lg 
            py-2 text-left text-lg font-medium text-white hover:bg-white hover:bg-opacity-5 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75 lg:py-5
             lg:text-2xl"
            >
              <span>{question}</span>
              <ChevronUpIcon className="w-6 transition-all ui-open:rotate-180 ui-open:transform" />
            </Disclosure.Button>
            <Transition
              className="overflow-hidden transition-all duration-500"
              enterFrom="transform scale-95 opacity-0 max-h-0"
              enterTo="transform scale-100 opacity-100 max-h-96"
              leaveFrom="transform scale-100 opacity-100 max-h-96"
              leaveTo="transform scale-95 opacity-0 max-h-0"
            >
              <Disclosure.Panel
                static
                className="pb-2 pt-4 text-base font-light lg:text-xl"
              >
                {answer}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
