import React, { useState } from 'react'

type Props = {
    front: string;
    back: string;
    tags: string[];
}

const FlashCard = (props: Props) => {
     const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="border rounded-lg p-4 shadow-sm" onClick={handleFlip}>
        <div  className={`relative w-full min-h-[200px] transition-transform duration-500 transform-style-3d cursor-pointer ${
            isFlipped ? "rotate-y-180" : ""
          }`}>
            <h3 className="text-lg font-semibold mb-2">Front</h3>
            <p className="text-gray-700">{props.front}</p>
        </div>
        <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Back</h3>
            <p className="text-gray-700">{props.back}</p>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
                {props.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FlashCard