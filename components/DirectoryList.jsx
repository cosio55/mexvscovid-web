import Link from 'next/link';
import ListItem from '../components/ListItem'

const TopSort = ({ projects }) => (
    <div className="container flex">
        <div className="flex  rounded-md bg-white shadow p-4 w-1/4">
            Filtros...
        </div>
        <div className="flex flex-1 flex-col pl-4">
            {
                projects.map(project => (
                    < ListItem project={project} key={project.id} />
                ))
            }
        </div>
    </div>
);

export default TopSort;