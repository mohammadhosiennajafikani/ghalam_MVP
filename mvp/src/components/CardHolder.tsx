

import { useRef, useState, useEffect } from "react";
import { Card } from "./Card";
import FaChevronLeft from "../assets/icons/icons8_Back_Arrow.svg";
import FaChevronRight from "../assets/icons/icons8_Forward_Arrow.svg";
import "./styles.css"

interface CardHolderProps {
    title: string;
    description?: string;
    data: any[];
}

export function CardHolder({ title, description, data }: CardHolderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // بررسی وضعیت دکمه‌ها هنگام اسکرول
    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    };

    const handleNext = () => {
        if (scrollRef.current) {
            const el = scrollRef.current;
            const newScroll = el.scrollLeft + 250;
            el.scrollTo({ left: newScroll, behavior:'smooth'});
        }
    };

    const handlePrev = () => {
        if (scrollRef.current) {
            const el = scrollRef.current;
            const newScroll = el.scrollLeft - 250;
            el.scrollTo({ left: newScroll, behavior: "smooth" });
        }
    };


    // اجرا بعد از هر اسکرول
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);
        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    return (
        <div className="my-6 bg-green-200 rounded-xl p-4 relative scrollbar-hide ">
            {/* Header */}
            <div className="mb-3 px-4 right-1">
                <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                {description && (
                    <p className="text-sm text-gray-600 mt-1">{description}</p>
                )}
            </div>

            {/* Carousel */}
            <div className="relative">
                <div
                    ref={scrollRef}
                   className="flex overflow-x-auto space-x-4 scroll-smooth  scroll-container"
                   style={{ overflow:'auto'

                   }}
                >
                    {data.map((item, index) => (
                        <div
                            key={item.id ?? index}
                            className="flex-shrink-0 "
                        >
                            <Card {...item} />
                        </div>
                    ))}
                </div>

                {/* دکمه قبلی */}
                {canScrollLeft && (
                    <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="قبلی"
                        className="absolute top-1/3 left-2 bg-blue-500 text-white p-2 rounded-full shadow hover:scale-110 active:scale-90 transition-transform"
                    >
                        <img src={FaChevronLeft} alt="قبلی" className="w-4 h-4" />
                    </button>
                )}

                {/* دکمه بعدی */}
                {canScrollRight && (
                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="بعدی"
                        className="absolute top-1/3 right-2 bg-blue-500 text-white p-2 rounded-full shadow hover:scale-110 transition-transform"
                    >
                        <img src={FaChevronRight} alt="بعدی" className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
}
