import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Question({ question, answer }) {
  return (
    <div className="w-full px-2 pt-6">
      <Disclosure as="div" className="mt-2 border-b-[1px] pb-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className="text-md flex w-full justify-between 
            rounded-lg px-4 py-2 text-left font-medium text-white hover:bg-white hover:bg-opacity-5 focus:outline-none focus-visible:ring focus-visible:ring-white
             focus-visible:ring-opacity-75"
            >
              <span>{question}</span>
              <ChevronUpIcon className="ui-open:rotate-180 ui-open:transform w-6 transition-all" />
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
                className="px-4 pb-2 pt-4 text-sm text-gray-400"
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
