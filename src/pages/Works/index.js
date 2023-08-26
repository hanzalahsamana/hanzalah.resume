import React, { useState } from 'react';
import { projects } from './data';
import Title from "../common/Title";
import WorkItem from "./Item";
import WorksMenu from "./Menu";
import './index.scss';


const Works = () => {
    const [selectedProjects, setSelectedProjects] = useState(projects);
    const [selectedType, setSelectedType] = useState('all');

    function handleMenuChange(type) {
        setSelectedType(type);
        if(type === "all") {
            setSelectedProjects(projects);
        } else {
            setSelectedProjects(projects.filter(p => p.type === type));
        }
    }
    return (
        <div className="page" id="works">
            <Title>
                Works - Talk is cheap show me the code!
            </Title>
            <WorksMenu
                items={[
                    'all',
                    'react',
                    'react-native',
                    'angular',
                ]}
                selected={selectedType}
                clicked={handleMenuChange}
            />
            <div className="row">
                {
                    selectedProjects.map(
                        item => <div className="column project-card" key={item.sourceCodeLink}>
                            <WorkItem
                                {...item}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Works;
