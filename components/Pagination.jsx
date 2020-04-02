import Link from 'next/link';


const Pagination = ({ numberOfPages, setPagination, pagination }) => {
    let pages = Array.from(Array(numberOfPages).keys())

    return (
        <div className="py-2 my-2">
            <nav className="block">
                <ul className="flex pl-0 rounded list-none flex-wrap">
                    {
                        pages.map(page => {
                            let selected = null;
                            if (pagination === page) {
                                selected = "bg-green-500 text-white"
                            } else {
                                selected = "text-green-500"
                            }
                            return (
                                <li key={page}>
                                    <button onClick={() => { setPagination(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`${selected} text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-green-500 bg-white hover:bg-green-300 hover:text-white `}>
                                        {page + 1}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
};

export default Pagination;