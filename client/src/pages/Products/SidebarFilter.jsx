import { useRef } from 'react';

export default function SidebarFilter({ setTypeFilter, isMobile }) {
    const checkbox1 = useRef(null);
    const checkbox2 = useRef(null);
    const checkbox3 = useRef(null);

    const checkboxRefs = [checkbox1, checkbox2, checkbox3];

    const handleFiltering = () => {
        const checkedValues = checkboxRefs
            .filter((checkbox) => checkbox.current?.checked)
            .map((checkbox) => checkbox.current.value);

        setTypeFilter(checkedValues); // update the selected types in the parent
    };

    return isMobile ? (
        <div className="mr-6 whitespace-nowrap border-gray-300 h-full translate-x-[-50%] translate-y-[18rem]">
            <span className=" text-lg mb-8 inline-block font-semibold text-gray-400">Filter by</span>
            <br />
            <span className="font-bold text-lg mb-3 inline-block">Flavor Type</span>
            <br />

            <div className="flex gap-2 ">
                <input onClick={handleFiltering} ref={checkbox1} type="checkbox" value="sweet" />
                <span>Sweet</span>
            </div>

            <br />

            <div className="flex gap-2">
                <input onClick={handleFiltering} ref={checkbox2} type="checkbox" value="savory" />
                <span>Savory</span>
            </div>

            <br />

            <div className="flex gap-2">
                <input onClick={handleFiltering} ref={checkbox3} type="checkbox" value="spicy" />
                <span>Spicy</span>
            </div>
        </div>
    ) : (
        <div className="mr-6 whitespace-nowrap border-r-2 border-gray-300 h-full">
        <span className=" text-lg mb-8 inline-block font-semibold text-gray-400">Filter by</span>
        <br />
        <span className="font-bold text-lg mb-3 inline-block">Flavor Type</span>
        <br />

        <div className="flex gap-2 ">
            <input onClick={handleFiltering} ref={checkbox1} type="checkbox" value="sweet" />
            <span>Sweet</span>
        </div>

        <br />

        <div className="flex gap-2">
            <input onClick={handleFiltering} ref={checkbox2} type="checkbox" value="savory" />
            <span>Savory</span>
        </div>

        <br />

        <div className="flex gap-2">
            <input onClick={handleFiltering} ref={checkbox3} type="checkbox" value="spicy" />
            <span>Spicy</span>
        </div>
    </div>
    );
}
