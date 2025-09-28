import React, { useState } from "react";

interface CardProps {
    title: string;
    description?: string;
    image: string;
    onClick?: () => void;
    children?: React.ReactNode;
}
export function Card({ title, description, image, onClick }: CardProps) {
    const [pressed, setPressed] = useState(false);

    return (
        <div
            className="relative rounded-xl overflow-hidden"
            style={{
                minWidth: "76px",
                maxWidth: "150px",
                maxHeight: '260px',
                minHeight: '160px',
                aspectRatio: "160/256",
            }}
        >
            {/* پس‌زمینه بلور شده */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(10px)",
                }}
            >
                <div className="absolute inset-0 bg-white/30"></div>
            </div>


            {/* محتوای کارت */}
            <button
                type="button"
                onClick={onClick}
                onMouseDown={() => setPressed(true)}
                onMouseUp={() => setPressed(false)}
                onMouseLeave={() => setPressed(false)}
                className="relative flex flex-col items-center w-full h-full focus:outline-none"
                style={{
                    transform: pressed ? "scale(0.95)" : "scale(1)",
                    transition: "transform 0.15s ease",
                    border: "none", outline: "none", background: "transparent"
                }}
            >
                {/* عکس اصلی */}
                <img
                    src={image}
                    alt={title}
                    className="w-full rounded-lg object-cover"
                    style={{
                        aspectRatio: "160/256", minWidth: "80px",
                        maxWidth: "160px",
                    }}
                />

                {/* متن پایین */}
                <div className="p-1 text-center">
                    <h3 className="text-[16px] font-bold text-gray-900 ">{title}</h3>
                    <p className="text-[12px] text-gray-800 ">{description}</p>
                </div>
            </button>
        </div>
    );
}

